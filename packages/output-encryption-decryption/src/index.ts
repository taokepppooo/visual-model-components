export const encryption  = (content: String) => {
  return content.split('').reverse().join('');    
}