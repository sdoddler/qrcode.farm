# qrcode.farm
A simple HTML + Javascript website to generate QR Codes on the client side

You can find the website at https://qrcode.farm/

## Background
I was frustrated that many of the free QR Code websites send your data to a backend, and wanted to create a simple QR code generator that uses client-side Javascript only. This means the website is able to run fully offline on a client device if needed. In my mind this increases data safety, and reduces risk when dealing with sensitive data.

## Dependencies
This uses https://github.com/soldair/node-qrcode in the /build folder to do the QR generation
