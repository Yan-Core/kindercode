client:
	cd client && npm run dev

server:
	cd server && cargo run -- serve

.PHONY: client server
