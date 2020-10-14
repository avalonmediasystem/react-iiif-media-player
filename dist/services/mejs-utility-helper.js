"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchMedia = switchMedia;
exports.handleTracks = handleTracks;
exports.createSourceTags = createSourceTags;
exports.createTrackTags = createTrackTags;

var _iiifParser = require("./iiif-parser");

/**
 * Switch media player source and track files when previous file ended or
 * a different canvas is selected
 * @param {Object} meJSPlayer MediaElement player wrapper, HTML node, and instance
 * @param {Integer} canvasIndex Current canvas index
 * @param {Object} props Redux state props
 * @param {Boolean} isEnded Flag indicating player advancing from previous media file or not
 */
function switchMedia(meJSPlayer, canvasIndex, isPlaying, captionOn, manifest, isEnded) {
  var media = meJSPlayer.media,
      node = meJSPlayer.node,
      instance = meJSPlayer.instance;

  var _getMediaInfo = (0, _iiifParser.getMediaInfo)(manifest, canvasIndex),
      mediaType = _getMediaInfo.mediaType,
      sources = _getMediaInfo.sources,
      error = _getMediaInfo.error;

  if (error) {
    return;
  }

  node.innerHTML = ''; // Build sources and tracks

  var sourceTags = createSourceTags(sources);
  var tracksTags = createTrackTags((0, _iiifParser.getTracks)());
  var newChildren = "".concat(sourceTags.join('\n')).concat(tracksTags.join('\n')); // Attach the new sources and tracks to video element

  node.innerHTML = newChildren;
  instance.setSrc(sources[0].src); // Build features from new souces and tracks

  node.player.buildquality(instance, null, null, media);
  node.player.buildtracks(instance, null, instance.layers, media); // Set tracks

  handleTracks(instance, media, mediaType, captionOn);
  instance.load();

  if (isPlaying || isEnded) {
    instance.play();
  }

  return instance;
}

function handleTracks(instance, media, mediaType, captionOn) {
  if (mediaType === 'video' && media.options.toggleCaptionsButtonWhenOnlyOne) {
    if (captionOn && instance.tracks && instance.tracks.length == 1) {
      instance.setTrack(instance.tracks[0].trackId, typeof keyboard !== 'undefined');
    }
  }
}

function createSourceTags(sources) {
  var sourceTags = [];

  for (var i = 0, total = sources.length; i < total; i++) {
    var source = sources[i];
    sourceTags.push("<source src=\"".concat(source.src, "\" type=\"").concat(source.format, "\" data-quality=\"").concat(source.quality, "\" />"));
  }

  return sourceTags;
}

function createTrackTags(tracks) {
  var tracksTags = [];

  for (var i = 0, total = tracks.length; i < total; i++) {
    var track = tracks[i];
    tracksTags.push("<track srclang=\"en\" kind=\"subtitles\" type=\"".concat(track.format, "\" src=\"").concat(track.id, "\"></track>"));
  }

  return tracksTags;
}