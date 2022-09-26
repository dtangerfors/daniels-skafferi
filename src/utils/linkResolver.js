exports.linkResolver = (doc) => {
   // URL for a category type
   if (doc.type === 'category') {
     return `/recept/${doc.uid}`
   }
 
   // URL for a recipe type
   if (doc.type === 'recipe') {
     return `/recept/${doc.uid}`
   }

   // URL for a course type
   if (doc.type === 'course') {
     return `/recept/${doc.uid}`
   }
 
   // URL for a page type
   if (doc.type === 'page') {
     return `/${doc.uid}`
   }
 
   // Backup for all other types
   return '/'
 }