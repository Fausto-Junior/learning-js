
fetch ('http://localhost:3000/recipients')
  .then (function (response){
    return response.json()
  })
  .then (function (recipients){
    recipients.forEach(function addRecipientToTable(recipient, index){
      const recipientHtml = `
        <tr>
          <th scope="row">${index+1}</th>
          <td>${recipient.status}</td>
          <td>${recipient.id}</td>
          <td>${recipient.bank_account.id}</td>
          <td>${recipient.bank_account.legal_name}</td>
          <td>${recipient.bank_account.document_number}</td>
          <td>${recipient.date_created}</td>
        </tr>
      `
      $('#recipients-table tbody').append(recipientHtml) 
    })
  })
