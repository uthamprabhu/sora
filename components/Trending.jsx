import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { icons } from '../constants';
import { VideoView, useVideoPlayer } from 'expo-video';

const zoomIn = {
    0: {
        scale: 0.9
    },
    1: {
        scale: 1.1
    }
};

const zoomOut = {
    0: {
        scale: 1.1
    },
    1: {
        scale: 0.9
    }
};

const TrendingItem = ({ activeItem, item }) => {
    const [play, setPlay] = useState(false)
    const player = useVideoPlayer({uri: item.video})

    const handlePlayPause = () => {
        if (play) {
            player.pause()
        } else {
            player.play()
        }
        setPlay(!play)
    };

    return (
        <Animatable.View
            className="mr-5"
            animation={activeItem === item.$id ? zoomIn : zoomOut}
            duration={500}
        >
            {play ? (
                <VideoView
                    player={player}
                    className="w-52 h-72 rounded-[35px] mt-3 bg-white/10"
                    contentFit='contain'
                    allowsFullscreen={true}
                    allowsPictureInPicture={true}
                    onPlaybackStatusUpdate={(status) => {
                        if (status.didJustFinish) {
                            setPlay(false); // Reset play state when video finishes
                        }
                    }}
                />
            ) : (
                <TouchableOpacity
                    className="relative justify-center items-center"
                    activeOpacity={0.7}
                    onPress={handlePlayPause} // Toggle play/pause on press
                >
                    <ImageBackground
                        source={{ uri: item.thumbnail }}
                        className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
                        resizeMode='cover'
                    />
                    <Image
                        source={icons.play}
                        className="w-12 h-12 absolute"
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            )}
        </Animatable.View>
    );
};

const Trending = ({ posts }) => {
    const [activeItem, setActiveItem] = useState(posts[0]);

    const viewableItemsChanged = ({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveItem(viewableItems[0].key);
        }
    };

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
                <TrendingItem
                    activeItem={activeItem}
                    item={item}
                />
            )}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={{
                itemVisiblePercentThreshold: 70,
            }}
            contentOffset={{ x: 170 }}
            horizontal
        />
    );
};

export default Trending;