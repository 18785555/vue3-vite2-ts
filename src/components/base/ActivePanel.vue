<script setup lang="ts">
</script>

<template>
  <div id="activity-panel" class="right-panel-wrapper is-activity">
      <div class="panel-overlay"></div>
      <div class="right-panel">
        <div class="right-panel-head">
          <h3>Activity</h3>
          <a class="close-panel">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-chevron-right">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </div>
        <div class="tabs-wrapper is-triple-slider is-squared">
          <div class="tabs-inner">
            <div class="tabs">
              <ul>
                <li data-tab="team-side-tab" class="is-active"><a><span>Team</span></a></li>
                <li data-tab="projects-side-tab"><a><span>Projects</span></a></li>
                <li data-tab="schedule-side-tab"><a><span>Schedule</span></a></li>
                <li class="tab-naver"></li>
              </ul>
            </div>
          </div>

          <div class="right-panel-body">
            <div id="team-side-tab" class="tab-content is-active">
              <!--Team Member-->
              <div class="team-card">
                <div class="h-avatar">
                  <img class="avatar" src="https://via.placeholder.com/150x150"
                    data-demo-src="assets/img/avatars/photos/12.jpg" alt="">
                  <img class="badge" src=""
                     alt="">
                </div>
                <div class="meta">
                  <span>Joshua S.</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-map-pin">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Las Vegas, NV
                  </span>
                </div>
                <a class="link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-arrow-right">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>

              <!--Team Member-->
              <div class="team-card">
                <div class="h-avatar">
                  <img class="avatar" src="https://via.placeholder.com/150x150"
                    data-demo-src="assets/img/avatars/photos/25.jpg" alt="">
                  <img class="badge" src="https://via.placeholder.com/150x150"
                    data-demo-src="" alt="">
                </div>
                <div class="meta">
                  <span>Melany W.</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-map-pin">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    San Jose, CA
                  </span>
                </div>
                <a class="link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-arrow-right">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>

              <!--Team Member-->
              <div class="team-card">
                <div class="h-avatar">
                  <img class="avatar" src="https://via.placeholder.com/150x150"
                    data-demo-src="assets/img/avatars/photos/18.jpg" alt="">
                  <img class="badge" src="https://via.placeholder.com/150x150"
                     alt="">
                </div>
                <div class="meta">
                  <span>Esteban C.</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-map-pin">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Miami, FL
                  </span>
                </div>
                <a class="link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-arrow-right">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>

              <!--Team Member-->
              <div class="team-card">
                <div class="h-avatar">
                  <img class="avatar" src="https://via.placeholder.com/150x150"
                    data-demo-src="assets/img/avatars/photos/13.jpg" alt="">
                  <img class="badge" src="https://via.placeholder.com/150x150"
                     alt="">
                </div>
                <div class="meta">
                  <span>Tara S.</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-map-pin">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    New York, NY
                  </span>
                </div>
                <a class="link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-arrow-right">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
            <div id="projects-side-tab" class="tab-content">
              <!--Project-->
              <div class="project-card">
                <div class="project-inner">
                  <img class="project-avatar" src="https://via.placeholder.com/150x150"
                    data-demo-src="assets/img/icons/logos/slicer.svg" alt="">
                  <div class="meta">
                    <span>The slicer project</span>
                    <span>getslicer.io</span>
                  </div>
                  <a class="link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-arrow-right">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
                <div class="project-foot">
                  <progress class="progress is-primary is-tiny" value="31" max="100">31%</progress>
                  <div class="foot-stats">
                    <span>5 / 24</span>

                    <div class="avatar-stack">
                      <div class="h-avatar is-small">
                        <img class="avatar" src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/photos/7.jpg" alt="">
                      </div>
                      <div class="h-avatar is-small">
                        <img class="avatar" src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/photos/5.jpg" alt="">
                      </div>
                      <div class="h-avatar is-small">
                        <img class="avatar" src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/photos/8.jpg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--Project-->
              <div class="project-card">
                <div class="project-inner">
                  <img class="project-avatar" src="https://via.placeholder.com/150x150"
                    data-demo-src="assets/img/icons/logos/metamovies.svg" alt="">
                  <div class="meta">
                    <span>Metamovies reworked</span>
                    <span>metamovies.co</span>
                  </div>
                  <a class="link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-arrow-right">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
                <div class="project-foot">
                  <progress class="progress is-primary is-tiny" value="84" max="100">84%</progress>
                  <div class="foot-stats">
                    <span>28 / 31</span>

                    <div class="avatar-stack">
                      <div class="h-avatar is-small">
                        <img class="avatar" src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/photos/13.jpg" alt="">
                      </div>
                      <div class="h-avatar is-small">
                        <img class="avatar" src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/photos/18.jpg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--Project-->
              <div class="project-card">
                <div class="project-inner">
                  <img class="project-avatar" src="https://via.placeholder.com/150x150"
                    data-demo-src="assets/img/icons/logos/fastpizza.svg" alt="">
                  <div class="meta">
                    <span>Fast Pizza redesign</span>
                    <span>fastpizza.com</span>
                  </div>
                  <a class="link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-arrow-right">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
                <div class="project-foot">
                  <progress class="progress is-primary is-tiny" value="60" max="100">60%</progress>
                  <div class="foot-stats">
                    <span>25 / 39</span>

                    <div class="avatar-stack">
                      <div class="h-avatar is-small">
                        <img class="avatar" src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/photos/7.jpg" alt="">
                      </div>
                      <div class="h-avatar is-small">
                        <img class="avatar" src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/photos/25.jpg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="schedule-side-tab" class="tab-content">
              <!--Timeline-->
              <div class="icon-timeline">
                <!--Timeline item-->
                <div class="timeline-item">
                  <div class="timeline-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-phone-call">
                      <path
                        d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                      </path>
                    </svg>
                  </div>
                  <div class="timeline-content">
                    <p>Call Danny at Colby's</p>
                    <span>Today - 11:30am</span>
                  </div>
                </div>
                <!--Timeline item-->
                <div class="timeline-item">
                  <div class="timeline-icon">
                    <img class="avatar" src="https://via.placeholder.com/150x150"
                      data-demo-src="assets/img/avatars/photos/7.jpg" alt="">
                  </div>
                  <div class="timeline-content">
                    <p>Meeting with Alice</p>
                    <span>Today - 01:00pm</span>
                  </div>
                </div>
                <!--Timeline item-->
                <div class="timeline-item">
                  <div class="timeline-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-message-circle">
                      <path
                        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                      </path>
                    </svg>
                  </div>
                  <div class="timeline-content">
                    <p>Answer Annie's message</p>
                    <span>Today - 01:45pm</span>
                  </div>
                </div>
                <!--Timeline item-->
                <div class="timeline-item">
                  <div class="timeline-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-mail">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div class="timeline-content">
                    <p>Send new campaign</p>
                    <span>Today - 02:30pm</span>
                  </div>
                </div>
                <!--Timeline item-->
                <div class="timeline-item">
                  <div class="timeline-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-smile">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                  </div>
                  <div class="timeline-content">
                    <p>Project review</p>
                    <span>Today - 03:30pm</span>
                  </div>
                </div>
                <!--Timeline item-->
                <div class="timeline-item">
                  <div class="timeline-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-phone-call">
                      <path
                        d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                      </path>
                    </svg>
                  </div>
                  <div class="timeline-content">
                    <p>Call Trisha Jackson</p>
                    <span>Today - 05:00pm</span>
                  </div>
                </div>
                <!--Timeline item-->
                <div class="timeline-item">
                  <div class="timeline-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-feather">
                      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                      <line x1="16" y1="8" x2="2" y2="22"></line>
                      <line x1="17.5" y1="15" x2="9" y2="15"></line>
                    </svg>
                  </div>
                  <div class="timeline-content">
                    <p>Write proposal for Don</p>
                    <span>Today - 06:00pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
</style>