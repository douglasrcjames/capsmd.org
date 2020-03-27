export function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export function checkFile(pdfShown) {
    var fileElement1 = document.getElementById("file-upload1");
    var fileElement2 = document.getElementById("file-upload2")
    var fileElement = null;
    if(pdfShown){
      fileElement = fileElement2
    } else {
      fileElement = fileElement1
    }

    var fileExtension = "";

    if (fileElement.value.lastIndexOf(".") > 0) {
        fileExtension = fileElement.value.substring(fileElement.value.lastIndexOf(".") + 1, fileElement.value.length);
    }
    if (
        fileExtension.toLowerCase() === "png" || 
        fileExtension.toLowerCase() === "jpg" || 
        fileExtension.toLowerCase() === "jpeg" ||
        fileExtension.toLowerCase() === "bmp"
    ) {
        return true;
    }
    else {
        return false;
    }
}

export function genId(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

export function randomAvatarPic(){
    const avatars = [
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F001-drone.png?alt=media&token=3c9b0b2a-4ce7-4872-af20-9460b0755a41",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F002-chip.png?alt=media&token=46f7d338-9a80-4e4d-b9e1-e5a971be3564",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F004-satellite.png?alt=media&token=f1c52bc9-26db-4c3f-ab9a-37020745072e",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F007-landing.png?alt=media&token=36064e01-dff1-4f69-9869-4a4e14d675b8",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F009-planet.png?alt=media&token=68edcbb8-2da5-4188-af02-ed9b834325d9",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F010-astronaut.png?alt=media&token=27a620e0-bfe5-4e98-a0a1-3fbdf2d0f00c",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F012-cell.png?alt=media&token=fea850b3-b688-4efc-a88c-6e8cee41d5e3",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F013-planet-1.png?alt=media&token=45720a7c-2fbb-435b-b32d-2f9a5ae3d623",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F014-mango.png?alt=media&token=1268c40d-982e-4d96-9f78-483145c4d0bb",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F015-cactus.png?alt=media&token=c08cdfa3-1ccf-4f55-aca4-8ffd83ee8198",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F016-sun.png?alt=media&token=ce6b0bcc-d16d-4c3b-81dd-666f88757d87",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F017-superhero.png?alt=media&token=9d75bdc3-8e2d-4ffe-b9ae-c86b995bf8b6",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F018-superhero-1.png?alt=media&token=40ff718e-0d7e-4c50-9b0d-f18440b6bb19",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F019-superhero-2.png?alt=media&token=9901ece8-7056-468f-808e-5074bb98cd66",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F020-superhero-3.png?alt=media&token=caf28d9a-d46e-4170-9a59-147f6e3a804e",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F021-superhero-4.png?alt=media&token=33b25342-d39c-4c9a-ab52-6c3b9390bdbc",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F023-waxing-moon.png?alt=media&token=6d76e0ba-98f0-497a-ab75-34eaa7a4620c",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F024-sunny.png?alt=media&token=e63f1cd2-09d3-4c52-a8ab-ea3144754d6f",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F025-full-moon.png?alt=media&token=ffd5badf-c374-437d-a163-275320eea7f2",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F026-robot.png?alt=media&token=15dd7fab-62e6-43a5-a188-1638ef852197",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F027-godzilla.png?alt=media&token=631048b5-7018-4d5a-9993-08af01a7be25",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F029-oni.png?alt=media&token=c63c2e38-3577-464d-afd9-81d708bbd614",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F031-octopus.png?alt=media&token=62f80597-2e92-4f6d-a44f-7a0a3a8cc8da",
        "https://firebasestorage.googleapis.com/v0/b/minutetech-app.appspot.com/o/site%2Favatar-urls%2F032-startup.png?alt=media&token=2a4cef9a-56f1-4f4c-be6b-8ef6ffe96a64"
    ]
    // will this ever choose 1?
    const randomlyChosen = avatars[Math.floor(Math.random()*avatars.length)];


    return randomlyChosen
}

export function testIOS() {

    var iDevices = [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ];
  
    if (!!navigator.platform) {
      while (iDevices.length) {
        if (navigator.platform === iDevices.pop()){ return true; }
      }
    }
  
    return false;
  }
 

export function mobileCheck() {
  var check = false;
  // eslint-disable-next-line
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};


export function chunkSubstr(str, size) {
  const numChunks = Math.ceil(str.length / size)
  const chunks = new Array(numChunks)

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size)
  }

  return chunks
}

