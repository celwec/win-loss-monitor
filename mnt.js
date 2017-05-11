/*
** This is a simple program to keep track of wins and losses
*/

// Variables to keep track of wins, losses, and win/loss ratio
var wins   = 0,
    losses = 0,
    ratio  = 0;

// Simple getters
var getAll    = _ => wins+losses,
    getWins   = _ => wins,
    getLosses = _ => losses,
    getRatio  = _ => ratio;

// Incrementing wins
function addWin() {
	wins++;
	updateRatio();
	updateDocument();
}

// Incrementing losses
function addLoss() {
	losses++;
	updateRatio();
	updateDocument();
}

// Calculating win/loss ratio
var updateRatio = _ => ratio = round(wins / losses, 2);

// Updating HTML document only if elements exist
function updateDocument() {
	var docAll    = document.getElementById("mnt-all"),
      docWins   = document.getElementById("mnt-wins"),
      docLosses = document.getElementById("mnt-losses"),
      docRatio  = document.getElementById("mnt-ratio");

	if (docAll)    docAll.innerHTML    = wins+losses;
	if (docWins)   docWins.innerHTML   = wins;
	if (docLosses) docLosses.innerHTML = losses;
	if (docRatio)  docRatio.innerHTML  = ratio;
}

// Rounding a number helper function
function round(n, i = 0) {
  // Multiplying float by 10 to the power of i
  n = n * Math.pow(10, i);
  // Rounding float to the nearest integer
  n = Math.round(n);
  // Dividing float by 10 to the power of i
  n = n / Math.pow(10, i);
	// Returning rounded float
  return n;
}
