//console.log(firebase);

// storing different restaurants in Firestore

// START Task 1: Creating/Storing data
// Create teams
// let real_madrid = {
//   team_name: "Real Madrid",
//   location: {
//     city: "Madrid",
//     country: "Spain",
//   },
//   top_scorers: ["Ronaldo", "Benzema", "Hazard"],
//   worldwide_fans_in_millions: 798,
// };

// let barcelona = {
//   team_name: "Barcelona",
//   location: {
//     city: "Barcelona",
//     country: "Spain",
//   },
//   top_scorers: ["Messi", "Suarez", "Puyol"],
//   worldwide_fans_in_millions: 738,
// };

// let manchester_united = {
//   team_name: "Manchester United",
//   location: {
//     city: "Manchester",
//     country: "England",
//   },
//   top_scorers: ["Cantona", "Rooney", "Ronaldo"],
//   worldwide_fans_in_millions: 755,
// };

// let manchester_city = {
//   team_name: "Manchester City",
//   location: {
//     city: "Manchester",
//     country: "England",
//   },
//   top_scorers: ["Sterling", "Aguero", "Haaland"],
//   worldwide_fans_in_millions: 537,
// };

// let brazil_national_team = {
//   team_name: "Brazil National Team",
//   location: {
//     city: "N/A",
//     country: "Brazil",
//   },
//   top_scorers: ["Ronaldinho", "Cafu", "Bebeto"],
//   worldwide_fans_in_millions: 950,
// };

// let argentina_national_team = {
//   team_name: "Argentina National Team",
//   location: {
//     city: "N/A",
//     country: "Argentina",
//   },
//   top_scorers: ["Messi", "Batistuta", "Maradona"],
//   worldwide_fans_in_millions: 888,
// };

// let atletico_madrid = {
//   team_name: "Atletico Madrid",
//   location: {
//     city: "Madrid",
//     country: "Spain",
//   },
//   top_scorers: ["Aragonés", "Griezmann", "Torez"],
//   worldwide_fans_in_millions: 400,
// };

// Store the objects d10 into Firestore
// Add() or set()
// db.collection("teams").doc("real_madrid").set(real_madrid);
// db.collection("teams").doc("barcelona").set(barcelona);
// db.collection("teams").doc("manchester_united").set(manchester_united);
// db.collection("teams").doc("manchester_city").set(manchester_city);
// db.collection("teams").doc("brazil_national_team").set(brazil_national_team);
// db.collection("teams")
//   .doc("argentina_national_team")
//   .set(argentina_national_team);
// db.collection("teams").doc("atletico_madrid").set(atletico_madrid);

// END Task 1: Creating/Storing data

// START Task 2: Querying data

// 1. Show all teams in Spain
// db.collection("teams")
//   .where("location.country", "==", "Spain")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// // 2. Show all teams in Madrid, Spain
// db.collection("teams")
//   .where("location.city", "==", "Madrid")
//   .where("location.country", "==", "Spain")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// // 3.Show all national teams (Remember there might be new national teams added later)
// db.collection("teams")
//   .where("location.city", "==", "N/A")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// // 4.Show all teams that are NOT in Spain
// db.collection("teams")
//   .where("location.country", "not-in", ["Spain"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// // 5. Show all teams that are not in Spain or England
// db.collection("teams")
//   .where("location.country", "not-in", ["Spain", "England"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// // #6
// db.collection("teams")
//   .where("location.country", "==", "Spain")
//   .where("worldwide_fans_in_millions", ">", 700)
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// // #7
// db.collection("teams")
//   .where("worldwide_fans_in_millions", ">", 500)
//   .where("worldwide_fans_in_millions", "<", 600)
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// // #8
// db.collection("teams")
//   .where("top_scorers", "array-contains", "Ronaldo")
//   .get()
//   .then((data) => {
//     data.docs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// // #9
// db.collection("teams")
//   .where("top_scorers", "array-contains-any", ["Ronald", "Maradona", "Messi"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// END Task 2: Querying data

// START Task 3: Updating data
// A. Update existing data

// Update the worldwide fans (primitive data types) as follows:
// 1.	Real Madrid: 811 M worldwide fans. Also, change team name to Real Madrid FC
// db.collection("teams").doc("real_madrid").update({
//   team_name: "Real Madrid FC",
//   worldwide_fans_in_millions: 811,
// });
// 2.	Barcelona: 747 M worldwide fans. Also, change team name to FC Barcelona
// db.collection("teams").doc("barcelona").update({
//   team_name: "FC Barcelona",
//   worldwide_fans_in_millions: 747,
// });

// Next, we want to update the top scorers (array) as follows:
// 1.	Real Madrid: Remove Hazard from the list and add Crispo to the list
// db.collection("teams")
//   .doc("real_madrid")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayRemove("Hazard"),
//   });

// db.collection("teams")
//   .doc("real_madrid")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayUnion("Crispo"),
//   });

// 2.	Barcelona: Remove Puyol from the list and add Deco to the list
// db.collection("teams")
//   .doc("barcelona")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayRemove("Puyol"),
//   });

// db.collection("teams")
//   .doc("barcelona")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayUnion("Deco"),
//   });

// B. Add new fields to existing documents
// Real Madrid: White (home). Black (away)
// db.collection("teams")
//   .doc("real_madrid")
//   .update({
//     color: {
//       home: "White",
//       away: "Black",
//     },
//   });

// Barcelona: Red (home). Gold (away)
// db.collection("teams")
//   .doc("barcelona")
//   .update({
//     color: {
//       home: "Red",
//       away: "Gold",
//     },
//   });

// C. Real Madrid: Purple jersey color for away matches
// db.collection("teams").doc("real_madrid").update({
//   "color.away": "Purple",
// });

// D. Barcelona: Pink jersey color for away matches
// db.collection("teams").doc("barcelona").update({
//   "color.away": "Pink",
// });

// END Task 3: Updating data
