class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :messages
end
