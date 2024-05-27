using cmd tool httpie

# produce
```sh
echo '{"value":"jan"}' | http POST :3000/kafka/send/elo
```

# consume 
```sh
http :3000/kafka/consume/elo
```

