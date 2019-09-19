json.extract! user, :username, :id, :stream_key, :stream_title, :stream_category
json.set! :picture, url_for(user.photo) 