<template>
    <div class="container my-5 py-5 z-depth-1">
       <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">

    <!--Google map-->
    <div id="map-container-google-1" class="map-container mb-5" style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=v%C3%A4ster%C3%A5s%20+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.maps.ie/route-planner.htm">Driving Route Planner</a></div>
    <!--Google Maps-->

    <!--Grid row-->
    <div class="row">

      <!--Grid column-->
      <div class="col-lg-5 col-md-12 mb-0 mb-md-0">

        <h3 class="font-weight-bold">Contact Us</h3>

        <p class="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente
          molestiae
          numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam, doloremque laborum.</p>

        <p><span class="font-weight-bold mr-2">Email:</span><a href="">contact@mycompany.com</a></p>
        <p><span class="font-weight-bold mr-2">Phone:</span><a href="">+48 123 456 789</a></p>

      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-7 col-md-12 mb-4 mb-md-0">

        <!--Grid row-->
        <div class="row">

          <!--Grid column-->
          <div class="col-md-6">

            <!-- Material outline input -->
            <div class="md-form md-outline mb-0">
              <input type="text" id="form-first-name" class="form-control">
              <label for="form-first-name">First name</label>
            </div>

          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-6">

            <!-- Material outline input -->
            <div class="md-form md-outline mb-0">
              <input type="text" id="form-last-name" class="form-control">
              <label for="form-last-name">Last name</label>
            </div>

          </div>
          <!--Grid column-->

        </div>
        <!--Grid row-->

        <!-- Material outline input -->
        <div class="md-form md-outline mt-3">
          <input type="email" id="form-email" class="form-control">
          <label for="form-email">E-mail</label>
        </div>

        <!-- Material outline input -->
        <div class="md-form md-outline">
          <input type="text" id="form-subject" class="form-control">
          <label for="form-subject">Subject</label>
        </div>

        <!--Material textarea-->
        <div class="md-form md-outline mb-3">
          <textarea id="form-message" class="md-textarea form-control" rows="3"></textarea>
          <label for="form-message">How we can help?</label>
        </div>

        <button type="submit" class="btn btn-info btn-sm ml-0">Submit<i class="far fa-paper-plane ml-2"></i></button>

      </div>
      <!--Grid column-->

    </div>
    <!--Grid row-->


  </section>
  <!--Section: Content-->


</div>


</template>

<script>
export default {

}
</script>

<style>
  

      .map-container {
        height: 200px;
        position: relative;
      }

      .map-container iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
      }
 

</style>