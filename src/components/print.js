export default function printMe() {
    if (process.env.NODE_ENV !== 'production') {
        console.log('Looks like we are in development mode!');
    } else {
        console.log('I get called from print.js!');
    }

}