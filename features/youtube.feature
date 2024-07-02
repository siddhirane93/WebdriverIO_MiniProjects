#This feature is still under development
Feature: Youtube test functionality

Scenario Outline: Go to Youtube, login and search for the test video, click & open the video, add & delete comments, 
like-unlike dislike and undo, mute-unmute, subscribe-unsubscribe, sort by the second option, 
go to settings-change the quality, comment and then delete the comment

 Given I open Youtube
 When I login to the account and
 When I open the test video
 Then I should be able to download resume


 # mute button xpath can be found //button[@class="ytp-mute-button ytp-button"]
 