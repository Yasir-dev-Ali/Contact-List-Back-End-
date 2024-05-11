const asyncHandler = require("express-async-handler");
const Contact = require("../Module/contact.module");

// getCotactList
const getContactList = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error('Contact not found');
    }
    res.status(200).json(contact);
   
       
        

   
})

// createContact

const createContact = asyncHandler( async (req, res) => {
    console.log('req.body', req.body);
    const {name,email,position,phone,message} = req.body;
    if(!name || !email || !position || !phone || !message){
       res.status(400);
         throw new Error('All fields are required');
    }
     const contact =await Contact.create({
        name,
        email,
        position,
        phone,
        message
     });
    res.status(201).json(contact);
});

// updateContact

const updateContact = asyncHandler( async (req, res) => {
  const contact= await Contact.findById(req.params.id)
  if(!contact){
        res.status(404);
        throw new Error('Contact not found');
  }
 const updateContact= await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true,
          
        }

 )
    res.status(200).json(updateContact);


});


// deleteContact

const deleteContact = asyncHandler( async (req, res) => {
    const contact= await Contact.findById(req.params.id)
    if(!contact){
          res.status(404);
          throw new Error('Contact not found');
    }
    await Contact.remove();
    res.status(200).json(contact);
    
    


});


module.exports = {
    getContactList,
    createContact,
    updateContact,
    deleteContact
}
