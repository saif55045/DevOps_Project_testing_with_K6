#!/usr/bin/env bash
# =============================================================================
# run-all-tests.sh — Run all k6 performance tests for the Todo List app
# Usage: bash run-all-tests.sh
# =============================================================================

echo ""
echo "╔══════════════════════════════════════════════════╗"
echo "║   k6 Performance Testing — Todo List App         ║"
echo "║   BSSE 8th Semester | DevOps Project             ║"
echo "╚══════════════════════════════════════════════════╝"
echo ""

BASE_URL="http://localhost:9090/todo-list"
RESULTS_DIR="./k6-results"
mkdir -p "$RESULTS_DIR"

# ── Check app is running ────────────────────────────────────────────────────
echo "🔍 Checking if Todo app is running..."
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/todos")
if [ "$STATUS" != "200" ]; then
  echo "❌ App is not running at $BASE_URL"
  echo "   Please start Tomcat and deploy the app first."
  exit 1
fi
echo "✅ App is running at $BASE_URL"
echo ""

# ── Run Smoke Test ──────────────────────────────────────────────────────────
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔬 [1/3] Running SMOKE TEST (1 user, 30 seconds)..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
k6 run --out json="$RESULTS_DIR/smoke-results.json" smoke-test.js
echo ""

# ── Run Load Test ───────────────────────────────────────────────────────────
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📈 [2/3] Running LOAD TEST (up to 50 users, ~3 mins)..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
k6 run --out json="$RESULTS_DIR/load-results.json" load-test.js
echo ""

# ── Run Spike Test ──────────────────────────────────────────────────────────
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "⚡ [3/3] Running SPIKE TEST (sudden burst to 100 users)..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
k6 run --out json="$RESULTS_DIR/spike-results.json" spike-test.js
echo ""

echo "╔══════════════════════════════════════════════════╗"
echo "║              ALL TESTS COMPLETE ✅               ║"
echo "║   Results saved to: ./k6-results/               ║"
echo "╚══════════════════════════════════════════════════╝"
echo ""
