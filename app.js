async function generateQRCode() {
    var qrText = document.getElementById('qrText').value;
    if (qrText) {

      /*  create(qrText,"data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAB99JREFUWEetl9tvHPUVxz+\/uc9evGuvr7Ed35JgEyeEa7g10DaooqhSFRUJCdFIFQ9tH1qpPPR\/qKr+A31ueYG2RIWicqkqkhiCkzjEMTGJHa9jr697v8zs7Mz8ql2oaJRAlorzMKMZHc3v8zu\/c77njAjDUNKm1WpVihtrpGdniRoGvqFx+Ls\/AF1H1fU2v3Krm2gXoLizxdzbf8GuFojFYtiWiWJYKJEYWv8o3fum0C37G0O0BVDJ57l+5l3U\/Bp9ySS6aaAqAqmZBIqBb0bQB8ZIDo0iFOUbQbQHsHaD7NwHdNsmkZjRWkAGkkBouM27FqGmR+iZfhDdtL59ACezTH3hHB22AboKhIhQIQwkTt3D120auk183zR2qgcpmj7tWVsRqK0v4V75kJjZDK9EUTScqkupWGVrN8fYvfegxROtZzvZRdeDx9pbHWgLoLq+gnPlLGrg4VVKRG0LJ1R59f1ZdpVeXnpkmNGpCdxSgdrqMn0vvvLtAlQ2VijNncYtFPn9n0\/xq+efZXxihEvn5zATveybGMXu7iCse5QWr9H5\/M9BtMfQVgTK22vUrpxj\/r13SCspntmfpCdpokS7UCImim4hjWbyGdR7x4j07W0dVTvWFkBY3EUuXQC3SqNWRtSrFHZ2kIpFrDdFRFWRUkcOjCCmH0cV7ZdiWwBIicxnYP40YXaLeiPgw\/OLLC9v8P3jR9nTnURIjbxlowxPYA0dIJbqQnB3kPYAgABJ8O\/Xqd9cYTub569vnMEtBqiKyy9+exI9VFjM3EToKoP3PkjqgWOoiU64C0TbAKFfpz5\/Fm9xDs0wyS5tk1tdZ3RqFKUvRb6Y49pKGlOGHD3+DEbfIHL4PkQk9rWp0BaA9H2ca3Noyxcp5bN4fkggBLLq0dHRQdarkb55k3KhwJHpgwwdPISIJpF2HLn3EJrxuXreydoCaOR3Ua7NEmaW8HyPYq3KTr5EEGqEfkAgAkrlCql4hEOHD6N39yJVE3QLP9KDNjyOULX\/D6BZTP5mGuXTGXI30yTicUJDxfVDsuUy9XqdWrmCkJKJkUGsSAQz1Q+qAVLgSw0G9qINTiDuIA53jYAMfLzFWYKVBYrbW0RNk2hfL1IoOLUajUaDIAgQfkAkarC7vsGeyWnUSByhqPhoNISKGNqP2TtwG8TXAkgpKac\/RVuYxXdr5ApZcoFCv20TjRk4roOiKChCQ1NVnFqF9ZUbHHzoKHo80eoZworSCCWOahGZfhhduzUfvhKgGfpGaRfng7ewlADP8bia2eW+l3\/D5pl3EKvzNGTQOoJoNI6uqOQ2N9jZ3mRgfD\/7pqZQhAnROE69TkOGqIP7iY3ec0sufCVAKCXiwvv4uR2ccoFqqcS6iFFRbIJqEXvnOpZt4DUaWLaNqZsEjsPG2ip2Zy9Hn3wMVRgQiZCvVHFdl0R3N9FHn\/u8nX+RD3cECJpltzCL4Wapb+ywtZmhmC8yu7DEbr5MIwjRlZADe5NEoxa6YSBCgVf3qVc8El0Jjj75KNF4Al8K3CBkc2uLua0Coy+c5P5EJ8I0UVT1zu24srqE\/8kMMUunmC+wtb3F5StLpNdzbG9uYjSHEqEyNtRJR8Ig1hFF01TCIKBec9E0g+nDRxiZGKdeqyMsk\/mrNyiWXfbv6cGMJIgcOEhk8t7bARqeS27mXezsBnoo2CnnWV7dYOnmLtVike6eJE6lxvZOnpgJakcCR1eIBi69nTFURUGGKlNTk4yPjhJKAZbNx2dm0ZBMjA2DaiJVg8hDT94BoFok\/+arWDLErdXIVj20gw8z8\/pr7BvupDMZZSOzy8zZi3RZGk\/9+hUamoLwG1gdceKpAbwQ9NVFkm4e3bAJLYu52U\/way5jI8M0ggBQ8QfHbwdIf\/B37OUlgsAlkylgPf4MHX3dXHjtT4x3Wti2hd9osHIjw+mzF3jpD7\/D7upCj3a0JFfxA2pOFefSR8QqWbq6ehGmRS0QXP5ojlQqimU3xUxj4Kkf\/g+ABOl5bL\/6RwwRkM9mKQzu48gLP0UJQz57\/5+48x8Ss0wafkClXGVhZY2BY8cZOjDW8glrNYLtTbILcwgR0teXItW1ByMSwRM6V68sYsUM9FgX9tA4I09850sAt1CgcP4s9aufENYdwoFRhn\/8Eww7TnMeSJ\/5F+7cDJai4NZ8HM8jvbFJpiEZf+QBhtWQejbH5kYGTRUooaR\/T5LunmFUwyTQLK7dSOP6AQP3P8w9Tx9H03VEvVKW6ffeQd3OsJteImEoaKpOz3MniB2+H4FK8fIcq397jWrDxdI0vFbJeZRyRW5ktpg6dpQRW8V1G5x6622GBgfRVI3JySH6m21Z1QlNm4tzl4mPTvDEyZfRrc\/\/H8Tyqdele+k8WV+hM26TKZQoFB2efflnRA8dbjmlz5xl+R+n0DtshBCUSx6uU6PslBl\/7Bjm9ctE\/Dq+anE9k2N+Z4dUzGKyM0ayN07v3nGkkWDPj06gxW6dD0QQBFIK2VImxWsQGDpKKG4ZZJqy3HolBZKmb4u9dW3Uqnz29pv0uy7ZzFprLnjgxRcpXDqHX9hGmjooEezxaYa\/dxz1i53\/V4\/v2g3bmWybgCIIKa1lWH3rDcL1RbCi5Iq7DPWPkNnd5sjJX9IxOXnb574VgC93A6W6g3NxBoFJ+PFp6mMHkdkdBk+cQEskbgFodtL\/ADbn7BwpIzx1AAAAAElFTkSuQmCC",
        200,70);     */  
        
        create(qrText,"",  200,70);  
        
        document.getElementById("downloadBtn").style.display = "block";
       
    } 
}


function adjustDarkColor() {
    var darkColorInput = document.getElementById('darkColor');
    var darkColor = darkColorInput.value;
    const rgb = hexToRgb(darkColor);

    if ((rgb.r + rgb.g + rgb.b) >= 240) {
        darkColorInput.value = adjustToValidDarkColor(rgb);
    }
    generateQRCode();
}

function adjustLightColor() {
    var lightColorInput = document.getElementById('lightColor');
    var lightColor = lightColorInput.value;
    const rgb = hexToRgb(lightColor);

    if ((rgb.r + rgb.g + rgb.b) <= 550) {
        lightColorInput.value = adjustToValidLightColor(rgb);
    }
    generateQRCode();
}

function adjustToValidDarkColor(rgb) {
    // Logic to reduce RGB values to make total less than 300
    while ((rgb.r + rgb.g + rgb.b) >= 240) {
        rgb.r = Math.max(0, rgb.r - 1);
        rgb.g = Math.max(0, rgb.g - 1);
        rgb.b = Math.max(0, rgb.b - 1);
    }
    return rgbToHex(rgb.r, rgb.g, rgb.b);
}

function adjustToValidLightColor(rgb) {
    // Logic to increase RGB values to make total more than 400
    while ((rgb.r + rgb.g + rgb.b) <= 550) {
        rgb.r = Math.min(255, rgb.r + 1);
        rgb.g = Math.min(255, rgb.g + 1);
        rgb.b = Math.min(255, rgb.b + 1);
    }
    return rgbToHex(rgb.r, rgb.g, rgb.b);
}

function hexToRgb(hex) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}





async function create(dataForQRcode, center_image, width, cwidth) {
  const canvas = document.getElementById('qrCanvas');

  var imageInput = document.getElementById('imageUpload');
  var marginSize = parseInt(document.getElementById('marginSlider').value);
  var qrSize = parseInt(document.getElementById('sizeSlider').value);
  
  const ctx = canvas.getContext("2d");

    width *= (qrSize/4)
  
 // Clear previous QR code and image
 ctx.clearRect(0, 0, canvas.width, canvas.height);

  QRCode.toCanvas(
    canvas,
    dataForQRcode,
    {
      errorCorrectionLevel: "H",
      margin: marginSize,
      width:width,
      color: {
        //dark: "#000000",
        dark:document.getElementById('darkColor').value,
        //light: "#ffffff",
     light: document.getElementById('lightColor').value,
      },
    }
  );

  var canvasWidth = canvas.width;
  //cwidth = cwidth > canvasWidth/4 ? canvasWidth/4 : cwidth;
  cwidth = canvasWidth/4;


  if (imageInput.files && imageInput.files[0]) {
    var reader = new FileReader();
    reader.onload = function(event) {
        var img = new Image();
        img.onload = async function() {
            // Adjust these values as needed
            var imageSize = cwidth; // Size of the image to be drawn on the QR code
            var imageCenter = (canvas.width - imageSize) / 2;

            // Draw the image onto the center of the QR code
            ctx.drawImage(img, imageCenter, imageCenter, imageSize, imageSize);

            // Once the image is loaded, draw the QR code
            await QRCode.toCanvas(
                canvas,
                dataForQRcode,
                {
                    errorCorrectionLevel: "H",
                    margin: marginSize,
                    width:width,
                    color: {
                        dark:document.getElementById('darkColor').value,
                //light: "#ffffff",
                        light: document.getElementById('lightColor').value,
                    },
                }
            );

            // Draw the image on the QR code
            const center = (canvasWidth - cwidth) / 2;
            ctx.drawImage(img, center, center, cwidth, cwidth);

        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(imageInput.files[0]);
}

    

    // Update the image element with the QR code
   /* var imgEl = document.getElementById('image');
    var url = canvas.toDataURL("image/png");
    imgEl.src = url;

    imgEl.style.width = width+"px";
    
    imgEl.style.height = width+"px";*/

}

