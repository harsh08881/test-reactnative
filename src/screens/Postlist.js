import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button, StyleSheet } from 'react-native';
import useFetchData from '../hooks/useFetchData';
import ErrorPopup from '../components/Error'; // We'll create this below

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
};

const PostListScreen = () => {
  const { data, loading, error, callApi } = useFetchData(fetchPosts);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  useEffect(() => {
    callApi();
  }, [callApi]);

  useEffect(() => {
    if (error) {
      setShowErrorPopup(true);
    }
  }, [error]);

  const handleRetry = () => {
    setShowErrorPopup(false);
    callApi();
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#000" />}
      
      {!loading && data && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}

      <Button title="Retry" onPress={callApi} />

      <ErrorPopup
        visible={showErrorPopup}
        message={error}
        onClose={() => setShowErrorPopup(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  item: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    elevation: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default PostListScreen;
