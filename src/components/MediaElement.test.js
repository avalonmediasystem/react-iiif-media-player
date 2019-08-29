import React from 'react';
import { renderWithRedux } from '../services/testing-helpers';
import MediaElement from './MediaElement';

describe('MediaElement component', () => {
  const sources = [
    {
      src: 'https://pawpaw.dlib.indiana.edu/master_files/ww72bb48n/auto.m3u8',
      type: 'application/x-mpegURL'
    },
    {
      src: 'https://pawpaw.dlib.indiana.edu/master_files/ww72bb48n/high.m3u8',
      type: 'application/x-mpegURL'
    },
    {
      src: 'https://pawpaw.dlib.indiana.edu/master_files/ww72bb48n/medium.m3u8',
      type: 'application/x-mpegURL'
    }
  ];

  const videoProps = {
    id: 'avln-mediaelement-component',
    mediaType: 'video',
    preload: 'auto',
    width: 480,
    height: 360,
    poster: '',
    crossorigin: 'anonymous',
    sources: JSON.stringify(sources),
    options: JSON.stringify({})
  };

  const audioProps = {
    id: 'avln-mediaelement-component',
    mediaType: 'audio',
    preload: 'auto',
    width: 780,
    height: 200,
    poster: '',
    crossorigin: 'anonymous',
    sources: JSON.stringify(sources),
    options: JSON.stringify({})
  };

  test('renders a video player successfully', () => {
    const { queryByTestId } = renderWithRedux(<MediaElement {...videoProps} />);
    expect(queryByTestId('video-element')).toBeInTheDocument();
    expect(queryByTestId('audio-element')).not.toBeInTheDocument();
  });

  test('renders an audio player successfully', () => {
    const { queryByTestId } = renderWithRedux(<MediaElement {...audioProps} />);
    expect(queryByTestId('video-element')).not.toBeInTheDocument();
    expect(queryByTestId('audio-element')).toBeInTheDocument();
  });

  test('passes through the correct props', () => {
    const { queryByTestId } = renderWithRedux(<MediaElement {...videoProps} />);
    const videoElement = queryByTestId('video-element');
    expect(videoElement).toHaveAttribute('height', '360');
    expect(videoElement).toHaveAttribute('width', '480');
    expect(videoElement).toHaveAttribute(
      'id',
      expect.stringContaining(audioProps.id)
    );
  });

  test('renders the correct media source elements', () => {
    const { queryByTestId } = renderWithRedux(<MediaElement {...videoProps} />);
    const videoElement = queryByTestId('video-element');
    expect(videoElement.querySelectorAll('source').length).toEqual(3);
  });
});
