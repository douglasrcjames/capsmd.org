import React, { Component } from 'react'

export default class PotholePathos extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Pothole Pathos</h1>
        <p>
          Driving along the Democracy Blvd exit off I- 270 yesterday, I was listening to an audible book. The story
          wasn’t good enough to distract my driving but it was compelling enough for me to miss the giant
          pothole on the exit ramp. Boom – my tiny Mazda Miata hit it at 40 miles per hour, rattling my body’s
          bones and my car’s suspension.
        </p>

        <p>
          It was my brain that rattled when I later read Montgomery County’s projections for roadway resurfacing
          in the just-released budget. By FY21, just thirty percent of primary and arterial roads will be rated good
          or better. Yes, in just a couple of years, the majority of the primary and arterials roads as well as rural
          and residential roads will be bumpy, rough, potholed messes.
        </p>
        <div className="center-text">
          <img
            className="responsive xxxlarge"
            alt="pot-holes-graph"
            src={require("../../../../assets/images/graphs/pot-holes-graph.png")}
            />
        </div>
        

        <p>
          Long ago, our budding nation made a deal. Pay your taxes and government will educate your kids;
          catch, prosecute, and jail the bad guys; and ensure you can get around safely. Pretty simple stuff. But
          now, in one of America’s most progressive, wealthiest, arguably smartest counties, two-thirds of our
          roads are projected to be in less than good condition. That’s not the deal on which we shook hands,
          Montgomery County government.
        </p>

        <p>
          Is it money? Yes, that’s a huge issue. In FY19, only thirty-nine percent of resurfacing requirements were
          funded, and that’s not acceptable. But a lack of funds, while something that must be addressed, is not
          the only reason.
        </p>

        <p>
          Have you ever wondered why that pothole on your street stayed unfilled for so long that a neighbor
          stuck an orange cone in it? Potholes, it turns out, are only fixed when they’re reported by residents. So
          if you get too busy between taking your kids to swim practice and working and forget to report the
          whopper of a pothole you encountered the other day, the county will never officially know it exists. It’s
          likely most residents don’t know they’re supposed to report potholes or even how to.
        </p>

        <p>
          Surely, with 3,565 county-owned vehicles, not to mention 1,300 school buses and 81 Ride-On routes,
          there must be a simple way for the people driving those vehicles to request needed road repairs. After
          all, those drivers frequently traverse nearly all the county’s roads.
        </p>

        <p>
          We residents continue to fulfill our part of the bargain. We pay our property and income taxes –
          grudgingly perhaps, but we pay them. Now our government must find a way to fulfill their part of the
          deal by ensuring our roads are smooth and safe. Roads that do not destroy tires, jostle stiff and sore
          backs, and put lives in danger are the bare minimum we should expect from our government.
        </p>
        
        <p>
          And if our government can’t meet minimal expectations, how long will it be before Montgomery County
          residents decide the original deal is worthless and leave Montgomery County, further crushing our tax
          base?
        </p>
  
        
      </div>
    )
  }
}
