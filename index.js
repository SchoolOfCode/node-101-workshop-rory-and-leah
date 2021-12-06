let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 4,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];

// console.log(myCollection)



  function describeItem (item){
  if (item === "School of Code pillow" && myCollection[2].count < 2){
    console.log ("I have a " + myCollection[2].name + " here's what I like about it: " + myCollection[2].whatILike);
  }else if(item === "School of Code pillow" && myCollection[2].count >= 2){
    console.log("I have " + myCollection[2].count + " " + myCollection[2].name + "s" + " here's what I like about them: " +myCollection[2].whatILike )

  }else if(item === "School of Code hat" && myCollection[1].count >= 2){
  console.log("I have " + myCollection[1].count + " " + myCollection[1].name + "s" +" here's what I like about them: " +myCollection[1].whatILike)

  }else if (item === "School of Code hat" && myCollection[1].count < 2){
    console.log ("I have a " + myCollection[1].name + " here's what I like about it: " + myCollection[1].whatILike);

  }else if (item === "School of Code mug" && myCollection[0].count < 2){
    console.log ("I have a " + myCollection[0].name + " here's what I like about it: " + myCollection[0].whatILike);
  }else if(item === "School of Code mug" && myCollection[0].count >= 2){
    console.log("I have " + myCollection[0].count + " " + myCollection[0].name + "s" + " here's what I like about them: " +myCollection[0].whatILike )
  }
}

describeItem("School of Code hat");

