const signon = "true";
const renderDiv = document.querySelector('.render-div');


const cardRender = () => {


    if (signon == "true") {

    const card = `
    
    

    <!-- nav bar -->
    <!-- As a heading -->
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        <h5 class="text-white h4">Collapsed content</h5>
        <span class="text-muted">Toggleable via the navbar brand.</span>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>

        <div class="container">

    <!-- income box -->
        <div class="row">

            <div class=" card col-10">
              <div class='title-month'>
                April
              </div>
                 <div class="text-amount">
                    $1200
                  </div>
                    <div class="text-nextPaidDay">
                      Next Paid Day <div class="text-month">April 12</div>
                    </div>
                      
            </div>

        </div><!-- end of row -->

      <!-- income line chart-->
        
      <!-- recurring expenses box-->
          <div class="row">

            <div class="card col-10">

              <div class="title">
                Recurring Monthly Expenses
              </div>
                  <div class="text-recurring-amount">
                    $ 1000
                  </div>

                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Recurring Expenses<div class="totalBill">5</div>
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                              <div class="container">
                                <div class="card">
                                  <h6 class="card-header">April Recurring Bill</h6>
                                  <div class="card-body">
                                    <h5 class="card-title">Rent</h5>
                                    <p class="card-text">$ 500 </p>
                                    <a href="#" class="btn btn-primary float-right">Paid</a>
                                  </div>
                                </div>                              
                              </div>
                        </div>
                      </div>
                    </div>                   

            </div>

          </div>
          </div>
            
          <div class="card">
            <div class="card-body expense-title">
              Grocery <span class="badge bg-secondary">100/ 140</span>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              Lunch  <span class="badge bg-secondary">100/ 140</span>
            </div>
          </div>

          <div class="card">
            <div class="card-body expense-title">
              Gas  <span class="badge bg-secondary">100/ 140</span>
            </div>
          </div>

          <div class="card">
            <div class="card-body expense-title">
              Entertainment  <span class="badge bg-secondary">100/ 140</span>
            </div>
          </div>

        </div><!-- end of container -->

    
    
    
    
    `;
    renderDiv.innerHTML = card;
    }
   
}

cardRender();