#!/bin/bash

# ratchet monorepo

cleanup() {
  echo "Terminating background processes..."
  kill 0 # Sends the termination signal to all child processes
  wait   # Wait for all processes to terminate
}

# Trap SIGINT (Ctrl+C) and SIGTERM signals and call the cleanup function
trap cleanup SIGINT SIGTERM


(
  cd backend || exit
  npm run dev
) &


(
  cd frontend/nextjs-blog || exit
  npm run dev
) &

wait

echo "all commands have ended"
