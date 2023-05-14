echo '\n\nrequesting all heroes'
curl localhost:3000/heroes

echo '\n\nrequesting flash'

curl localhost:3000/heroes/1

echo '\n\nrequesting with wrong body'

curl --silent -X POST \
 --data-binary '{"invalid": "data"}'\
 localhost:3000/heroes

echo '\n\nUser created'

CREATE=$(curl --silent -X POST \
 --data-binary '{"name":"Alfredo Manuel","age":19,"gander":"M"}'\
 localhost:3000/heroes)

 echo $CREATE

 ID=$(echo $CREATE | jq .id)
 echo $ID 