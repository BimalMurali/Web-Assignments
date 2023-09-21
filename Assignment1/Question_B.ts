function removeNonPrintableASCII(input: string): string {
    
    const regex = /[\x00-\x09\x0B\x0C\x0E-\x1F\x7F]+/g;
  
    // Replace the matched characters with an empty string
    return input.replace(regex, '');
  }
  
  const inputString = "Hello\x07World\x0D!\x1F";
  const cleanedString = removeNonPrintableASCII(inputString);
  
  console.log(cleanedString); // "HelloWorld!"
  
