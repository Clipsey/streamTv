class MessageSerializer < ActiveModel::Serializer
  attributes :id, :conversation_id, :text, :created_at, :username
end
