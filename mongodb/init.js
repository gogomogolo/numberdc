
var collectionList = db.runCommand( { listCollections: 1 } ).cursor.firstBatch;

var numbers = false;
var i;
for (i = 0; i < collectionList.length; i++) {
  if (collectionList[i].name === "numbers") numbers = true;
}

if (!numbers) {
	db.createCollection("numbers");
}

