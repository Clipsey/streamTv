json.set! :benches do 
  @benches.each do |bench| 
    json.set! bench.id do
      bench.extract! :lat, :lng
    end
  end
end