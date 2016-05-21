json.array!(@posts) do |post|
  json.extract! post, :id, :title, :content, :categories, :author, :avatar
  json.url post_url(post, format: :json)
end
