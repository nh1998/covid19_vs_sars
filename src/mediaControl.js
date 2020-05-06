// **** IMAGE sequence options ******/

let optionsImageSequence_1 = {
    /**
     * Set the url to your images. The filenames should have this structure:
     * filePrefix + index + fileFormat. E.g., marathon00.jpg
     * */
    url: "./img/Covid19",

    // set the file prefix
    filePrefix: "covid19_",

    // set the file format
    fileFormat: "jpg",

    // set the <img> tag id
    tagID: "animation1",

    // This is the image sequence start
    startIndex: 0,

    // The total number of images in the sequence
    amount: 224,

    // Set the coordinates where you want to reproduce the image sequence
    startRollingAt: 20,
    finishRollingAt: 810,

    // relative to 'window' or 'wheel' By default it is relative to wheel


    // CSS position. Use 'fixed' to keep image sequence in place, else 'relative'
    cssPosition: "fixed"

}

// Create an instance of the your image sequence
let Covid19 = new ImageSequence(optionsImageSequence_1);
// Add your animation to the main sequences
mainSequences.push(Covid19)

let optionsImageSequence_2 = {

    url: "./img/SARS",
    filePrefix: "SARS_",
    fileFormat: "png",
    tagID: "animation2",
    startIndex: 0,
    amount: 224,
    startRollingAt: 630,
    finishRollingAt:1800,

    cssPosition: "relative"
}

// Create an instance of the your image sequence
let SARS = new ImageSequence(optionsImageSequence_2);
// Add your animation to the main sequences
mainSequences.push(SARS)
