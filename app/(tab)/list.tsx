import React, { useState, useRef, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Pressable, Animated, Dimensions, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RequestStatus, RequestData } from '@/utils/types';
import { Link, router } from 'expo-router';
import { RiderContext } from '../provider/RiderProvider';

const { width } = Dimensions.get('window');

export default function ListScreen() {
  const context = useContext(RiderContext);
  if (!context) throw new Error('RiderContext is not provided');
  const { requests, refreshRequests, setRequests, selectedRequest, setSelectedRequest } = context;
  const [searchQuery, setSearchQuery] = useState('');
  const [showUnconfirmedOnly, setShowUnconfirmedOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Initial load
    if (requests.length === 0) {
      setIsLoading(false);
    }
  }, [requests]);

  if (!requests) {
    return <Text>No requests</Text>;
  }

  const unconfirmedCount = requests.filter(r => r.status === RequestStatus.UNCONFIRMED).length;

  const filteredRequests = requests.filter(request => {
    const matchesSearch = request.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.pickupAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.dropoffAddress.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch && (!showUnconfirmedOnly || request.status === RequestStatus.UNCONFIRMED);
  });

  const handleRequestPress = (requestId: string) => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    const newRequests = requests.map(request => {
      if (request.id === requestId) {
        return { ...request, status: RequestStatus.CONFIRMED };
      }
      return request;
    });
    setRequests(newRequests);
    setSelectedRequest(requestId);
  };

  const refreshData = async () => {
    try {
      setIsLoading(true);
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
  
      // Reset requests to trigger a refresh
      await refreshRequests();
    } catch (error) {
      console.error('Error refreshing data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getBackgroundColor = (status: RequestStatus) => {
    switch (status) {
      case RequestStatus.UNCONFIRMED:
        return '#e8f5e9';
      case RequestStatus.CONFIRMED:
        return '#ffebee';
      case RequestStatus.COMPLETED:
        return '#f5f5f5';
    }
  };

  const handleViewOnMap = (request: RequestData) => {
    // Animate the press
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate to map with the request ID
    router.push({
      pathname: '/map',
      params: { selectedRequestId: request.id }
    });
  };

  // Fade in animation on mount
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <View style={styles.header}>
          {/***** Search *****/}
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#999"
            />
          </View>

          {/***** Notification *****/}
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setShowUnconfirmedOnly(!showUnconfirmedOnly)}
          >
            <Ionicons name="notifications" size={24} color="#666" />
            {unconfirmedCount > 0 && (
              <Animated.View
                style={[
                  styles.badge,
                  {
                    transform: [{ scale: scaleAnim }]
                  }
                ]}
              >
                <Text style={styles.badgeText}>{unconfirmedCount}</Text>
              </Animated.View>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={refreshData}>
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
              <Ionicons name="refresh" size={24} color="#666" />
            </Animated.View>
          </TouchableOpacity>
        </View>

        {/***** Main Section *****/}
        <ScrollView
          style={styles.requestList}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {filteredRequests.map((request, index) => (
            <Animated.View
              key={request.id}
              style={[
                styles.requestItemContainer,
                {
                  transform: [{
                    translateX: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [width, 0]
                    })
                  }],
                  opacity: fadeAnim,
                }
              ]}
            >
              <Pressable
                style={[
                  styles.requestItem,
                  { backgroundColor: getBackgroundColor(request.status) }
                ]}
                onPress={() => handleRequestPress(request.id)}
              >
                <Text style={styles.guestName}>{request.guestName}</Text>
                <View style={styles.requestDetails}>
                  {/***** Position *****/}
                  <View style={styles.addressContainer}>
                    <View style={styles.addressContainer}>
                      <Ionicons name="location" size={16} color="#666" />
                      <Text style={styles.address}>{request.pickupAddress}</Text>
                    </View>
                    <View style={styles.addressContainer}>
                      <Ionicons name="location-outline" size={16} color="#666" />
                      <Text style={styles.address}>{request.dropoffAddress}</Text>
                    </View>
                  </View>
                </View>
                {request.status === RequestStatus.CONFIRMED && (
                  <Animated.View
                    style={[
                      styles.checkmarkContainer,
                      {
                        transform: [{ scale: scaleAnim }]
                      }
                    ]}
                  >
                    <Ionicons name="checkmark-circle" size={24} color="#4CAF50" style={styles.checkmark} />
                  </Animated.View>
                )}
                <View style={styles.bottomRow}>
                  <View style={styles.infoItem}>
                    <Ionicons name="time" size={16} color="#666" />
                    <Text style={styles.infoText}>
                      {request.requestTime?.toLocaleTimeString() || 'N/A'}
                    </Text>
                  </View>
                  <View style={styles.phoneContainer}>
                    <Ionicons name="call" size={16} color="#666" />
                    <Text style={styles.phoneText}>{request.phoneNumber}</Text>
                  </View>
                  {request.status !== RequestStatus.COMPLETED && (
                    <TouchableOpacity
                      style={styles.mapButton}
                      onPress={() => handleViewOnMap(request)}
                    >
                      <Ionicons name="map" size={16} color="#fff" />
                      <Text style={styles.mapButtonText}>Map</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </Pressable>
            </Animated.View>
          ))}
        </ScrollView>
      </Animated.View>

      {/***** Tab Section *****/}
      <View style={styles.tabBar}>
        <View style={[styles.tab, styles.activeTab]}>
          <Text style={styles.activeTabText}>List</Text>
        </View>
        <Link href="/map" asChild>
          <Pressable style={styles.tab}>
            <Text style={styles.tabText}>Map</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 44,
    fontSize: 16,
    color: '#333',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
    position: 'relative',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#f44336',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  requestList: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 16,
  },
  requestItemContainer: {
    marginBottom: 12,
  },
  requestItem: {
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  guestName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1a237e',
  },
  requestDetails: {
    gap: 8,
  },
  addressContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  address: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  infoRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
  },
  checkmarkContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  checkmark: {
    transform: [{ scale: 1.2 }],
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 8,
    margin: 4,
  },
  activeTab: {
    backgroundColor: '#4CAF50',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  phoneText: {
    fontSize: 14,
    color: '#666',
  },
  mapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a232e',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  mapButtonText: {
    color: '#fff',
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '600',
  },
});
