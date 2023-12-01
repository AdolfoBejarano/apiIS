created () {this.getTicket()},

methods: 
{
  getTicket () 
  {
    return axios.get
    ("http://localhost:2000/" , 
    {
      params: 
      {
        foo: 'SELECT * FROM eur_usd WHERE primary_key = 2;'
      }
    }
    )
    .then(response => {
      const ticket = response.data.ticket;

      // Update the data property
      this.ticket = ticket;

      console.log(ticket);
      return ticket;
    })
    .catch(function (error) {
      console.log(error);
    });
  

  }
}