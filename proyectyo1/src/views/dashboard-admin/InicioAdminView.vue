<template>
  <body class="g-sidenav-show bg-body">
    <MenuVecomponente />
    <main
      class="
        main-content
        position-relative
        max-height-vh-100
        h-100
        border-radius-lg
      "
    >
      <MenuHocomponente />
      <div class="container-fluid py-4">
        <div class="row justify-content-center">
          <div class="col-xl-4 col-sm-6 mb-xl-5 mb-4">
            <div class="card">
              <div class="card-header p-3 pt-2">
                <div
                  class="
                    icon icon-lg icon-shape
                    bg-gradient-primary
                    shadow-primary
                    text-center
                    border-radius-xl
                    mt-n4
                    position-absolute
                  "
                >
                  <i class="bi bi-person-fill opacity-10"></i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize">Total usuarios</p>
                  <h4 class="mb-0">25</h4>
                </div>
              </div>
              <hr class="dark horizontal my-0" />
              <div class="card-footer p-3">
                <p class="mb-0">
                  <span class="text-success text-sm font-weight-bolder"
                    >+3% </span
                  >que el mes pasado
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-xl-5 mb-4">
            <div class="card">
              <div class="card-header p-3 pt-2">
                <div
                  class="
                    icon icon-lg icon-shape
                    bg-gradient-success
                    shadow-success
                    text-center
                    border-radius-xl
                    mt-n4
                    position-absolute
                  "
                >
                  <i class="bi bi-person-fill opacity-10"></i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize">Nuevos usuarios</p>
                  <h4 class="mb-0">7</h4>
                </div>
              </div>
              <hr class="dark horizontal my-0" />
              <div class="card-footer p-3">
                <p class="mb-0">
                  <span class="text-danger text-sm font-weight-bolder"
                    >-2%</span
                  >
                  que ayer
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr class="hr" />
        <div class="row mb-4">
          <div class="col-lg-12 col-md-6 mb-md-0 mb-4">
            <div class="card">
              <div class="card-header pb-0">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6>Visualizacion</h6>
                    <p class="text-sm mb-0">
                      <i class="fa fa-check text-info" aria-hidden="true"></i>
                      <span class="font-weight-bold ms-1">30 Personas</span>
                      registradas este mes
                    </p>
                  </div>
                  <div class="col-lg-6 col-5 my-auto text-end">
                    <!-- <div class="dropdown float-lg-end pe-4">
                        <a class="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fa fa-ellipsis-v text-secondary"></i>
                        </a>
                        <ul class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
                          <li><a class="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                          <li><a class="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                          <li><a class="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                        </ul>
                      </div> -->
                  </div>
                </div>
              </div>
              <div class="card-body px-4 pb-2">
                <div class="table-responsive">
                  <table class="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th
                          class="
                            text-uppercase text-secondary text-xxs
                            font-weight-bolder
                            opacity-7
                          "
                        >
                          Programas
                        </th>
                        <th
                          class="
                            text-uppercase text-secondary text-xxs
                            font-weight-bolder
                            opacity-7
                            ps-2
                          "
                        >
                          miembros
                        </th>
                        <th
                          class="
                            text-center text-uppercase text-secondary text-xxs
                            font-weight-bolder
                            opacity-7
                          "
                        >
                          total personas
                        </th>
                        <th
                          class="
                            text-center text-uppercase text-secondary text-xxs
                            font-weight-bolder
                            opacity-7
                          "
                        >
                          actividad
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <h6 class="mb-0 text-sm">ADSI</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="avatar-group mt-2">
                            <a
                              href="javascript:;"
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Ryan Tompson"
                            >
                              <!-- <img src="../assets/img/team-1.jpg" alt="team1"> -->
                            </a>
                            <a
                              href="javascript:;"
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Romina Hadid"
                            >
                              <!-- <img src="../assets/img/team-2.jpg" alt="team2"> -->
                            </a>
                            <a
                              href="javascript:;"
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Alexander Smith"
                            >
                              <!-- <img src="../assets/img/team-3.jpg" alt="team3"> -->
                            </a>
                            <a
                              href="javascript:;"
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Jessica Doe"
                            >
                              <!-- <img src="../assets/img/team-4.jpg" alt="team4"> -->
                            </a>
                          </div>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="text-xs font-weight-bold"> 5 </span>
                        </td>
                        <td class="align-middle">
                          <div class="progress-wrapper w-75 mx-auto">
                            <div class="progress-info">
                              <div class="progress-percentage">
                                <span class="text-xs font-weight-bold"
                                  >60%</span
                                >
                              </div>
                            </div>
                            <div class="progress">
                              <div
                                class="progress-bar bg-gradient-info w-60"
                                role="progressbar"
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <h6 class="mb-0 text-sm">Enfermeria</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="avatar-group mt-2">
                            <a
                              href="javascript:;"
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Romina Hadid"
                            >
                              <!-- <img src="../assets/img/team-2.jpg" alt="team5"> -->
                            </a>
                            <a
                              href="javascript:;"
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Jessica Doe"
                            >
                              <!-- <img src="../assets/img/team-4.jpg" alt="team6"> -->
                            </a>
                          </div>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="text-xs font-weight-bold"> 2 </span>
                        </td>
                        <td class="align-middle">
                          <div class="progress-wrapper w-75 mx-auto">
                            <div class="progress-info">
                              <div class="progress-percentage">
                                <span class="text-xs font-weight-bold"
                                  >10%</span
                                >
                              </div>
                            </div>
                            <div class="progress">
                              <div
                                class="progress-bar bg-gradient-info w-10"
                                role="progressbar"
                                aria-valuenow="10"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <h6 class="mb-0 text-sm">Sistemas</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="avatar-group mt-2">
                            <a
                              href="javascript:;"
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Romina Hadid"
                            >
                              <!-- <img src="../assets/img/team-3.jpg" alt="team8"> -->
                            </a>
                            <a
                              href="javascript:;"
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Jessica Doe"
                            >
                              <!-- <img src="../assets/img/team-1.jpg" alt="team9"> -->
                            </a>
                          </div>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="text-xs font-weight-bold"> 3 </span>
                        </td>
                        <td class="align-middle">
                          <div class="progress-wrapper w-75 mx-auto">
                            <div class="progress-info">
                              <div class="progress-percentage">
                                <span class="text-xs font-weight-bold"
                                  >100%</span
                                >
                              </div>
                            </div>
                            <div class="progress">
                              <div
                                class="progress-bar bg-gradient-success w-100"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <h6 class="mb-0 text-sm">Audivisuales</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="avatar-group mt-2">
                            <a
                              href="javascript:;"
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Ryan Tompson"
                            >
                              <!-- <img src="../assets/img/team-4.jpg" alt="user1"> -->
                            </a>
                            <a
                              href="javascript:;"
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Romina Hadid"
                            >
                              <!-- <img src="../assets/img/team-3.jpg" alt="user2"> -->
                            </a>
                            <a
                              href="javascript:;"
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Alexander Smith"
                            >
                              <!-- <img src="../assets/img/team-4.jpg" alt="user3"> -->
                            </a>
                            <a
                              href="javascript:;"
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Jessica Doe"
                            >
                              <!-- <img src="../assets/img/team-1.jpg" alt="user4"> -->
                            </a>
                          </div>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="text-xs font-weight-bold"> 10 </span>
                        </td>
                        <td class="align-middle">
                          <div class="progress-wrapper w-75 mx-auto">
                            <div class="progress-info">
                              <div class="progress-percentage">
                                <span class="text-xs font-weight-bold"
                                  >100%</span
                                >
                              </div>
                            </div>
                            <div class="progress">
                              <div
                                class="progress-bar bg-gradient-success w-100"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <h6 class="mb-0 text-sm">Audivisuales</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="avatar-group mt-2">
                            <a
                              href="javascript:;"
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Ryan Tompson"
                            >
                              <!-- <img src="3" alt="user1"> -->
                            </a>
                            <a
                              href="javascript:;"
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Romina Hadid"
                            >
                              <!-- <img src="#" alt="user2"> -->
                            </a>
                            <a
                              href="javascript:;"
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Alexander Smith"
                            >
                              <!-- <img src="#" alt="user3"> -->
                            </a>
                            <a
                              href="javascript:;"
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Jessica Doe"
                            >
                              <!-- <img src="#" alt="user4"> -->
                            </a>
                          </div>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="text-xs font-weight-bold"> 10 </span>
                        </td>
                        <td class="align-middle">
                          <div class="progress-wrapper w-75 mx-auto">
                            <div class="progress-info">
                              <div class="progress-percentage">
                                <span class="text-xs font-weight-bold"
                                  >100%</span
                                >
                              </div>
                            </div>
                            <div class="progress">
                              <div
                                class="progress-bar bg-gradient-success w-100"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- otras funciones del js -->
    <div class="fixed-plugin">

<div class="card shadow-lg">
  <div class="card-header pb-0 pt-3">
    <div class="float-start">
      <h5 class="mt-3 mb-0">Configurador de interfaz de usuario de materiales</h5>
      <p>Vea nuestras opciones de tablero.</p>
    </div>
    <div class="float-end mt-4">
      <button class="btn btn-link text-dark p-0 fixed-plugin-close-button">
        <i class="material-icons">clear</i>
      </button>
    </div>
    <!-- End Toggle Button -->
  </div>
  <hr class="horizontal dark my-1">
  <div class="card-body pt-sm-3 pt-0">
    <!-- Sidebar Backgrounds -->
    <div>
      <h6 class="mb-0">Colores de la barra lateral</h6>
    </div>
    <a href="javascript:void(0)" class="switch-trigger background-color">
      <div class="badge-colors my-2 text-start">
        <span class="badge filter bg-gradient-primary active" data-color="primary"
          onclick="sidebarColor(this)"></span>
        <span class="badge filter bg-gradient-dark" data-color="dark" onclick="sidebarColor(this)"></span>
        <span class="badge filter bg-gradient-info" data-color="info" onclick="sidebarColor(this)"></span>
        <span class="badge filter bg-gradient-success" data-color="success" onclick="sidebarColor(this)"></span>
        <span class="badge filter bg-gradient-warning" data-color="warning" onclick="sidebarColor(this)"></span>
        <span class="badge filter bg-gradient-danger" data-color="danger" onclick="sidebarColor(this)"></span>
      </div>
    </a>
    <!-- Sidenav Type -->
    <div class="mt-3">
      <h6 class="mb-0">Tipo de navegación lateral</h6>
      <p class="text-sm">Elija entre 2 tipos diferentes de sidenav.</p>
    </div>
    <div class="d-flex">
      <button class="btn bg-gradient-dark px-3 mb-2 active" data-class="bg-gradient-dark"
        onclick="sidebarType(this)">Oscuro</button>
      <button class="btn bg-gradient-dark px-3 mb-2 ms-2" data-class="bg-transparent"
        onclick="sidebarType(this)">Transparente</button>
      <button class="btn bg-gradient-dark px-3 mb-2 ms-2" data-class="bg-white"
        onclick="sidebarType(this)">Blanco</button>
    </div>
    <p class="text-sm d-xl-none d-block mt-2">Puede cambiar el tipo de sidenav solo en la vista de escritorio.</p>
    <!-- Navbar Fixed -->
    <div class="mt-3 d-flex">
      <h6 class="mb-0">Barra de navegación fija</h6>
      <div class="form-check form-switch ps-0 ms-auto my-auto">
        <input class="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed" onclick="navbarFixed(this)">
      </div>
    </div>
    <hr class="horizontal dark my-3">
    <div class="mt-2 d-flex">
      <h6 class="mb-0">Claro / Oscuro</h6>
      <div class="form-check form-switch ps-0 ms-auto my-auto">
        <input class="form-check-input mt-1 ms-auto" type="checkbox" id="dark-version" onclick="darkMode(this)">
      </div>
    </div>
    <hr class="horizontal dark my-sm-4">
    <a class="btn bg-gradient-info w-100" href="https://www.creative-tim.com/product/material-dashboard-pro">Free
      Download</a>
    <a class="btn btn-outline-dark w-100"
      href="https://www.creative-tim.com/learning-lab/bootstrap/overview/material-dashboard">View documentation</a>
    <div class="w-100 text-center">
      <a class="github-button" href="https://github.com/creativetimofficial/material-dashboard"
        data-icon="octicon-star" data-size="large" data-show-count="true"
        aria-label="Star creativetimofficial/material-dashboard on GitHub">Star</a>
      <h6 class="mt-3">Thank you for sharing!</h6>
      <a href="https://twitter.com/intent/tweet?text=Check%20Material%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard"
        class="btn btn-dark mb-0 me-2" target="_blank">
        <i class="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
      </a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-dashboard"
        class="btn btn-dark mb-0 me-2" target="_blank">
        <i class="fab fa-facebook-square me-1" aria-hidden="true"></i> Share
      </a>
    </div>
  </div>
</div>
</div>
 <!--   Core JS Files   -->
<!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
  
  </body>
</template>
    
    <script>
  //links de bootstrap  
import "@/assets/css/material-dashboard.css";
import "@/assets/css/style.css";
// import '@/assets/js/material-dashboard'




import MenuHocomponente from "@/components/C-Admin/MenuHocomponente.vue";
import MenuVecomponente from "@/components/C-Admin/MenuVecomponente.vue";
export default {
  components: {
    MenuHocomponente,
    MenuVecomponente,
  },
};
</script>



    
    <style>
</style>