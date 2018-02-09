import React from 'react';

const VideoListItem = (props) => {

    const onVideoSelect = props.onVideoSelect;
    const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;

    return (
        <li onClick={() => onVideoSelect(video)} className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={imageUrl} alt="youtube-thumbnail"/>
                </div>

                <div className='media-body'>
                    <div className='media-heading'>{videoTitle}</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;