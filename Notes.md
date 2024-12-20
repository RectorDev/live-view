
Read: https://developers.google.com/youtube/youtube_player_demo


The information in this section describes the status of the video player and the video being played (or the last video to play). The following list shows the API function associated with each field in this section:

Duration:                     getDuration()
Current time:                 getCurrentTime()
Player state:                 getPlayerState()
Percentage of video loaded:   getVideoLoadedFraction()
Start bytes:                  getVideoStartBytes()
Volume (on/off):              isMuted()
Number of videos in playlist: count(getPlaylist())
Position of current video:    getPlaylistIndex()
Videos in playlist:           getPlaylist()
Bytes loaded:                 getVideoBytesLoaded() (deprecated)
Total bytes:                  getVideoBytesTotal() (deprecated)



This page calls the getVideoUrl() and getEmbedCode() functions when the player is ready to play a video. These functions are called again if you load or cue a video.


If you call getVideoUrl() after a video has played for at least 10 seconds, the URL includes a parameter that specifies the time offset at which the player should begin playing the video.





You can choose to load or cue content in the player.
If you select an option to loadcontent and then update the player, the player will play the specified content instead of whichever video, if any, is already playing.

If you select an option to cue  content and the update the player, the player loads the video but does not play it. To play the video, you need to click the Play  link in the player controls section or on the video player itself.

Depending on your selection, this page calls one of the following API functions:

 loadVideoById
 loadVideoByUrl
 loadPlaylist
 cueVideoById
 cueVideoByUrl
 cuePlaylist

