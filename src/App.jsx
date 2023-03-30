import { useState } from 'react'
import globeIcon from "./assets/global.png"
import githubIcon from "./assets/github-mark/github-mark.svg"
const App = () => {

  return (
    <div className='container mx-auto'>
      <div className='flex flex-col gap-8 py-16'>

        {/* Profile */}
        <div>
          <div className='text-xs text-center flex items-center justify-center'>Dambar Pun Resume</div>
          <div className='flex justify-between'>
            <div className='flex gap-8 '>
              <div>
                <img src='https://avatars.githubusercontent.com/u/27145810?v=4' alt="" className='h-32 w-32' />
              </div>
              <div className='leading-5 '>
                <div className='text-4xl text-orange-500 font-medium'>Dambar Pun</div>
                <div className='text-gray-500'>Kowloon, HK</div>
                <div className='flex gap-4'>
                  <div>Software Engineer</div>
                  <div className='flex gap-1'><span className='italic'>@</span>mapking international</div>
                </div>
                <div>
                  <ul>
                    <li className='flex items-center gap-1'><div>Porfolio: </div> <a href="https://github.com/dambar08/resume.git">https://github.com/dambar08/resume.git</a></li>
                  </ul>
                </div>
                <div>Change is the only constant</div>
                <div>Currently - Experimenting with ChatGPT</div>
              </div>
            </div>

            <div className='flex flex-col justify-end'>
              <li className='flex items-center justify-end gap-1'><a href="https://github.com/dambar08">dambar08</a><div><img src={githubIcon} className="h-4 w-4" /></div> </li>
              <li className='flex items-center justify-end gap-1'><a href="https://github.com/onlinegrave">onlinegrave</a><div><img src={githubIcon} className="h-4 w-4" /></div> </li>
              <li className='flex items-center justify-end gap-1'><a href="https://github.com/kada240">kada240</a><div><img src={githubIcon} className="h-4 w-4" /></div> </li>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className='flex gap-4'>
          <h5 className='text-3xl text-gray-500 font-medium'>Skills:</h5>
          <div className='flex gap-4'>
            <div className='border-2 font-medium border-black rounded-full p-1 px-6'>Java</div>
            <div className='border-2 font-medium border-black rounded-full p-1 px-6'>Javascript</div>
            <div className='border-2 font-medium border-black rounded-full p-1 px-6'>Ruby</div>
            <div className='border-2 font-medium border-black rounded-full p-1 px-6'>Typescript</div>
            <div className='border-2 font-medium border-black rounded-full p-1 px-6'>Python</div>
            <div className='border-2 font-medium border-black rounded-full p-1 px-6'>Swift</div>
          </div>
        </div>


        <div>
          <div className='flex items-center gap-8'>
            <h4 className='text-4xl text-gray-500 font-medium'>Experience</h4>
            <div className='h-[2px] w-full bg-gray-300'></div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-8'>
              <div className='flex items-center justify-center flex-col gap-4'>
                <div className='mt-2'>
                  <div className='rounded-full h-3 w-3 bg-gray-300'></div>
                </div>
                <div className='flex-1'>
                  <div className='h-full w-0 border-2 border-dashed border-300'></div>
                </div>
              </div>
              <div className='flex-1'>
                <div className='text-black font-medium text-2xl'>Mapking International</div>
                <div className='flex  items-center gap-4'>
                  <div className='text-black font-medium text-xl'>Software Engineer</div>
                  <div className='text-gray-400'>Kowloon Bay, HK</div>
                </div>
                <div>
                  <ul>
                    <li>Documentation</li>
                    <li>Application development for the full lifecycle of software</li>
                    <li>Creating technical specifications</li>
                    <li>Identify and assess new technologies prior to implementation</li>
                    <li>Software and Hardware Specification</li>
                    <li>Aid in application architecture</li>
                    <li>Completing system risk, and analysis</li>
                    <li>Monitor systems performance</li>
                    <li>Perform maintenance and software integrations for existing systems</li>
                  </ul>
                </div>
              </div>
              <div className='text-lg text-gray-500 font-medium'>Oct 2019 - Present</div>
            </div>

            <div className='flex gap-8'>
              <div className='flex items-center justify-center flex-col gap-4'>
                <div className='mt-2'>
                  <div className='rounded-full h-3 w-3 bg-gray-300'></div>
                </div>
                <div className='flex-1'>
                  <div className='h-full w-0 border-2 border-dashed border-300'></div>
                </div>
              </div>
              <div className='flex-1'>
                <div className='text-black font-medium text-2xl'>Zerone Technology</div>
                <div className='flex  items-center gap-4'>
                  <div className='text-black font-medium text-xl'>Programmer</div>
                  <div className='text-gray-400'></div>
                </div>
                <div>
                  <div>

                  </div>
                  <ul>
                    <li>Internship  </li>
                    <li>Development of websites in laravel</li>
                  </ul>
                </div>
              </div>
              <div className='text-lg text-gray-500 font-medium'>Feb 2019 - Sept 2019</div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <div className='flex items-center gap-8'>
            <h4 className='text-4xl text-gray-500 font-medium'>Education</h4>
            <div className='h-[2px] w-full bg-gray-300'></div>
          </div>
          <div>
            <div className='flex gap-8'>
              <div className='flex items-center justify-center flex-col gap-4'>
                <div className='mt-2'>
                  <div className='rounded-full h-3 w-3 bg-gray-300'></div>
                </div>
                <div className='flex-1'>
                  <div className='h-full w-0 border-2 border-dashed border-300'></div>
                </div>
              </div>
              <div className='flex-1'>
                <div className='text-black font-medium text-2xl'>London Metropolitan University</div>
                <div className='flex  items-center gap-4'>
                  <div className='text-black font-medium text-xl'>BScIT</div>
                  <div className='font-semibold text-sm'>(3.7 GPA)</div>
                </div>
              </div>
              <div className='text-lg text-gray-500 font-medium'>2017 - 2019</div>
            </div>
          </div>
        </div>
        {/* Projects */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <div className='flex items-center gap-8'>
            <h4 className='text-4xl text-gray-500 font-medium'>Projects</h4>
            <div className='h-[2px] w-full bg-gray-300'></div>
          </div>
          <div className='flex flex-col gap-2'>
            <div>
              <div>
                <div className='flex'>
                  <div className='flex-1'>
                    <div className='text-black font-medium text-2xl'>eTaxi</div>
                    <div className='flex gap-2 items-center'>
                      <div><img src={globeIcon} className="h-4 w-4" /></div>
                      <a href="https://etaxi.com.hk" className='font-medium'>https://etaxi.com.hk</a>
                    </div>
                    <div>Taxi Service for mainland and hongkong</div>
                  </div>
                </div>
              </div>
              <div>
                <div className='text-lg text-gray-500 font-medium'>Rails, Ruby, Php, CodeIgniter, Docker, Minishift, Flutter, SpringBoot, Python, Redis, Mysql, Memcached, GCP, Firebase, Android, Java, iOS, Swift, Google API(Geocoding), React, Typescript, Postresql, Google Analytics, Sidekiq, Fastlane, Jenkins, Cron, NodeJS, Websocket, Socket.io</div>
              </div>
            </div>
            <div>
              <div>
                <div className='flex'>
                  <div className='flex-1'>
                    <div className='text-black font-medium text-2xl'>Address Splitter</div>
                    <div className='flex gap-2 items-center'>
                    </div>
                    <div>An application to split, parse, format internal database addresses</div>
                  </div>
                </div>
              </div>
              <div>
                <div className='text-lg text-gray-500 font-medium'>Spacy, Machine Learning, Python</div>
              </div>
            </div>

            <div>
              <div>
                <div className='flex'>
                  <div className='flex-1'>
                    <div className='text-black font-medium text-2xl'>Car rent payment(WeChatPay, Alipay)</div>
                    <div className='flex gap-2 items-center'>
                    </div>
                    <div>Taxi rental payment system</div>
                  </div>
                </div>
              </div>
              <div>
                <div className='text-lg text-gray-500 font-medium'>Rails, Cron, GCP, Webhooks</div>
              </div>
            </div>

            <div>
              <div>
                <div className='flex'>
                  <div className='flex-1'>
                    <div className='text-black font-medium text-2xl'>MTR AEL</div>
                    <div className='flex gap-2 items-center'>
                    </div>
                    <div>AEL Ticket Booking System integrated with Mpay Payment. Payment support for WeChatPay, Alipay, VisaMastercard and American Express. Support for QR Ticket.</div>
                  </div>
                </div>
              </div>
              <div>
                <div className='text-lg text-gray-500 font-medium'>Rails, Cron, GCP, Nodejs, Webhooks</div>
              </div>
            </div>

            <div>
              <div>
                <div className='flex'>
                  <div className='flex-1'>
                    <div className='text-black font-medium text-2xl'>Mapking Traffic</div>
                    <div className='flex gap-2 items-center'>
                    </div>
                    <div>Live Traffic, Road Incident Reporter Application</div>
                  </div>
                </div>
              </div>
              <div>
                <div className='text-lg text-gray-500 font-medium'>Flutter, SpringBoot, Redis, Postgresql</div>
              </div>
            </div>

            <div>
              <div>
                <div className='flex'>
                  <div className='flex-1'>
                    <div className='text-black font-medium text-2xl'>Pokhara Safal Marathon</div>
                    <div className='flex gap-2 items-center'>
                      <div><img src={globeIcon} className="h-4 w-4" /></div>
                      <a href="https://pokharamarathon.org" className='font-medium'>https://pokharamarathon.org</a>
                    </div>
                    <div>To provide the nation in Sports Map of the World.</div>
                  </div>
                </div>
              </div>
              <div>
                <div className='text-lg text-gray-500 font-medium'>php, laravel, html5, css3</div>
              </div>
            </div>
            <div>
              <div>
                <div className='flex'>
                  <div className='flex-1'>
                    <div className='text-black font-medium text-2xl'>GTFS</div>
                    <div className='flex gap-2 items-center'>
                      <div><img src={globeIcon} className="h-4 w-4" /></div>
                      <a href="https://developers.google.com/transit/gtfs" className='font-medium'>https://developers.google.com/transit/gtfs</a>
                    </div>
                    <div>The General Transit Feed Specification (GTFS), also known as GTFS static or static transit to differentiate it from the GTFS realtime extension, defines a common format for public transportation schedules and associated geographic information.</div>
                  </div>
                </div>
              </div>
              <div>
                <div className='text-lg text-gray-500 font-medium'>Springboot, GCP, python, Machine Learning, Docker </div>
              </div>
            </div>
            <div>
              <div>
                <div className='flex'>
                  <div className='flex-1'>
                    <div className='text-black font-medium text-2xl'>Oyeboss</div>
                    <div className='flex gap-2 items-center'>
                    </div>
                    <div>Stripe Payment Integration</div>
                  </div>
                </div>
              </div>
              <div>
                <div className='text-lg text-gray-500 font-medium'>Rails, Stripe, Webhooks</div>
              </div>
            </div>

            <div>
              <div>
                <div className='flex'>
                  <div className='flex-1'>
                    <div className='text-black font-medium text-2xl'>Web Scraper</div>
                    <div className='flex gap-2 items-center'>
                    </div>
                    <div>Built complex web scraper for openrice, uen-sg, wifihk, ypmo etc.</div>
                  </div>
                </div>
              </div>
              <div>
                <div className='text-lg text-gray-500 font-medium'>Python (packages used selenium, bs4, pandas, xlsxwriter, etc)</div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      
        {/* Personal Projects */}
        <section>
          <div>
            <div className='flex items-center gap-8'>
              <h4 className='text-4xl text-gray-500 font-medium'>Personal Projects</h4>
              <div className='h-[2px] w-full bg-gray-300'></div>
            </div>
            <div className='flex flex-col gap-2'>
              <div>
                <div>
                  <div className='flex'>
                    <div className='flex-1'>
                      <div className='text-black font-medium text-2xl'>whysosumi</div>
                      <div className='flex gap-2 items-center'>
                        <div><img src={globeIcon} className="h-4 w-4" /></div>
                        <a href="https://whysosumi.firebaseapp.com" className='font-medium'>https://whysosumi.firebaseapp.com</a>
                      </div>
                      <div>Solar System</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='text-lg text-gray-500 font-medium'>React, Tailwind, CSS, Google Analytics, Firebase</div>
                </div>
              </div>
              <div>
                <div>
                  <div className='flex'>
                    <div className='flex-1'>
                      <div className='text-black font-medium text-2xl'>kinfh</div>
                      <div className='flex gap-2 items-center'>
                        <div><img src={globeIcon} className="h-4 w-4" /></div>
                        <a href="https://kinfh2022.vercel.app" className='font-medium'>https://kinfh2022.vercel.app</a>
                      </div>
                      <div>Application to create food recipe</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='text-lg text-gray-500 font-medium'>NextJS, Tailwind, Prisma, NextAuth, Vercel</div>
                </div>
              </div>

              <div>
                <div>
                  <div className='flex'>
                    <div className='flex-1'>
                      <div className='text-black font-medium text-2xl'>quoti-news</div>
                      <div className='flex gap-2 items-center'>
                        <div><img src={githubIcon} className="h-4 w-4" /></div>
                        <a href="https://github.com/onlinegrave/QuotiNews.git" className='font-medium'>https://github.com/onlinegrave/QuotiNews.git</a>
                      </div>
                      <div>Free News</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='text-lg text-gray-500 font-medium'>Android, Kotlin, React, NodeJs, Typescript, Javascript, Tailwind</div>
                </div>
              </div>

              <div>
                <div>
                  <div className='flex'>
                    <div className='flex-1'>
                      <div className='text-black font-medium text-2xl'>blog</div>
                      <div className='flex gap-2 items-center'>
                        <div><img src={githubIcon} className="h-4 w-4" /></div>
                        <a href="https://github.com/dambar08/blog.git" className='font-medium'>https://github.com/dambar08/blog.git</a>
                      </div>
                      <div>Blog</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='text-lg text-gray-500 font-medium'>Javascript, Ruby, Markdown, Jekyll</div>
                </div>
              </div>

              <div>
                <div>
                  <div className='flex'>
                    <div className='flex-1'>
                      <div className='text-black font-medium text-2xl'>resume</div>
                      <div className='flex gap-2 items-center'>
                        <div><img src={githubIcon} className="h-4 w-4" /></div>
                        <a href="https://github.com/dambar08/resume.git" className='font-medium'>https://github.com/dambar08/resume.git</a>
                      </div>
                      <div>Resume</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='text-lg text-gray-500 font-medium'>Tailwind, ReactJs, Vite</div>
                </div>
              </div>

              <div>
                <div>
                  <div className='flex'>
                    <div className='flex-1'>
                      <div className='text-black font-medium text-2xl'>insta</div>
                      <div className='flex gap-2 items-center'>
                        <div><img src={githubIcon} className="h-4 w-4" /></div>
                        <a href="https://github.com/dambar08/insta.git" className='font-medium'>https://github.com/dambar08/insta.git</a>
                      </div>
                      <div>Front End for Social Media</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='text-lg text-gray-500 font-medium'>Flutter</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
