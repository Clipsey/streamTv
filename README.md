![banner](https://user-images.githubusercontent.com/20288304/65359910-ca86bc00-dbb2-11e9-9c09-95218bf37f6b.png)

#  `twitch.tv` Clone

My attempt at a clone of a twitch.tv, a livestreaming website for a variety of content, ranging from video games to performance arts like dancing, or simply chatting. The important aspect of the website is that users are able to broadcast live to other users the website, and users are able to follow their favorite streamers.

[Live Link](https://twitch-copy.herokuapp.com)


## Table of content

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)


## Installation

How to install:

- In the repository, run the command 'rails s' to start the rails server and begin serving the SPA entry file.
- Run the command 'npm start', in order to start building the React Frontend files.

## Usage

![Main](https://user-images.githubusercontent.com/20288304/67603805-c3614980-f72e-11e9-9b25-fe30d9c2ba1a.png)

On the `Index / Landing Page`, there is a list of users displayed in the main view. On the left side, there is a list of channels that the current user is following, and at the top, are a couple of Nav-Links to visit the Index / Categories and a video on how to stream.

![Categories](https://user-images.githubusercontent.com/20288304/67604079-7b8ef200-f72f-11e9-9305-f540eea4df83.png)

On the `Directory / Categories Page`, there is a list of categories displayed, with the picture associated with each category displayed, and a randomly generated viewership number. The `Browse` at in the top bar also becomes highlighted and underlined, based on the route.

![Channel](https://user-images.githubusercontent.com/20288304/67604141-aaa56380-f72f-11e9-8647-362803a05d89.png)

On the `Channel / Users Page`, the user's video content, as well as the user's stream title, category, and some dummy tags displayed. The video being shown, is a streaming video from AWS / S3 Bucket, unless the user is streaming a live video, then the live stream will be displayed instead of a placeholder video.


## Technologies

* React.js
* Redux
* Ruby on Rails
* AWS / S3 
* Centos / Linux
* Digital Ocean
* Heroku
