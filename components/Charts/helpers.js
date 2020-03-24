export async function getNotes(inputVal) {
  return new Promise(resolve => {
    let notes;
    if (inputVal != null) {
      notes = inputVal;
    } else {
      notes = "undefined";
    }
    // let hashtags = "";
    // if (inputHashtags != null) {
    //   for (let k = 0; k < inputHashtags.length; k++) {
    //     hashtags += inputHashtags[k] + " ";
    //     if (k == inputHashtags.length - 1) {
    //       let endArr = [];
    //       endArr.push(notes);
    //       endArr.push(hashtags);
    //       resolve(endArr);
    //     }
    //   }
    // } else {
    let endArr = [];
    endArr.push(notes);
    // endArr.push(hashtags);
    resolve(endArr);
    // }
  });
}
export async function getHashtags(inputHashtags) {
  console.log(inputHashtags, "INP HASH");
  return new Promise(resolve => {
    let hashtags;
    if (inputHashtags != null && inputHashtags != undefined) {
      hashtags = inputHashtags;
    } else {
      hashtags = "undefined";
    }
    console.log(hashtags, "END HASHS");
    resolve(hashtags);
  });
}
