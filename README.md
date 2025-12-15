# RedLightRunners
Interactive data visualization of traffic violations in Greensboro, NC traffic violations (2014-2016)

## Quick Start (Modern Development)

```bash
# Install dependencies
npm install

# Start development server with hot-reloading
npm run dev
```

The app will automatically open at `http://localhost:3000` with hot-reloading enabled!

## Project Overview

### Current State
This project visualizes **red light violations** in Greensboro, NC from 2014-2016, but currently only displays **~3.5% of available data** (152 out of 4,402 total violations). The visualization shows intersection locations where violations occurred, but lacks temporal filtering capabilities.

### Data Sources
- **Original dataset**: 4,402 traffic violations with detailed timestamps (`starting_files/citations.csv`)
- **Current visualization**: 152 intersection locations (`data/data.json`) 
- **Missing**: Temporal data integration for time-based filtering

### The Grand Vision
The project's ultimate goal is to create an **interactive timeline slider** that allows users to:
- **Slide left**: Start at the beginning of the dataset (2014)
- **Slide right**: Progress through time to the end (2016)
- **Watch violations appear**: See how traffic patterns evolved over months/years
- **Identify hotspots**: Discover which intersections became more/less dangerous over time

### Technical Implementation
The address data structure was designed to be geocodable - intersection addresses like `"3099 HIGH POINT RD/I-40 E"` can be parsed and geocoded to render precise map markers, enabling spatial visualization of violation patterns.

## Résumé Value for Data Scientists

### Why This Project Demonstrates Real-World Data Science Skills

**1. Data Processing & Cleaning**
- Converting unstructured PDF data to structured CSV
- Handling messy address formats and geocoding challenges
- Data quality assessment and cleaning workflows

**2. Geospatial Analysis**
- Working with geographic data and coordinate systems
- Integration with mapping APIs (Google Maps)
- Spatial data visualization techniques

**3. Time Series Analysis**
- Temporal data processing and filtering
- Time-based pattern recognition
- Chronological data visualization

**4. Interactive Data Visualization**
- Building user-friendly interfaces for complex datasets
- Real-time data filtering and display
- Responsive design for data exploration

**5. Real-World Impact**
- **Public safety applications**: Identifying dangerous intersections
- **Resource allocation**: Helping police departments optimize patrol routes
- **Policy insights**: Data-driven traffic management decisions

## Remaining Development Tasks

### Phase 1: Core Functionality
- [ ] **Integrate temporal data**: Add date/time information to `data.json`
- [ ] **Implement slider functionality**: Connect slider to filter markers by date range
- [ ] **Add timeline controls**: Month/year progression with smooth animations
- [ ] **Performance optimization**: Handle 4,400+ markers efficiently

### Phase 2: Enhanced Visualization
- [ ] **Color-coded hotspots**: Red for high-violation areas, green for safer zones
- [ ] **Violation density mapping**: Heat maps showing concentration patterns
- [ ] **Time-based clustering**: Group violations by time periods
- [ ] **Statistical overlays**: Show violation trends and patterns

### Phase 3: Advanced Analytics
- [ ] **Predictive modeling**: Identify intersections likely to have future violations
- [ ] **Seasonal analysis**: Show how violations change by season/weather
- [ ] **Traffic flow correlation**: Connect violations to traffic volume data
- [ ] **Enforcement effectiveness**: Measure impact of increased police presence

## Civil Policing Value Proposition

### Immediate Benefits
- **Resource optimization**: Deploy officers to high-violation intersections
- **Pattern recognition**: Identify recurring problem areas and times
- **Performance metrics**: Track effectiveness of traffic enforcement efforts
- **Public transparency**: Show citizens where violations occur most frequently

### Advanced Applications
- **Predictive policing**: Anticipate where violations are likely to occur
- **Infrastructure planning**: Guide traffic light timing and intersection redesign
- **Policy evaluation**: Measure impact of traffic law changes
- **Community engagement**: Visualize traffic safety data for public awareness

### Data-Driven Extensions
- **Heat intensity mapping**: Color-code intersections by violation frequency
- **Temporal clustering**: Group violations by time of day, day of week, season
- **Risk assessment**: Identify "danger zones" requiring immediate attention
- **Enforcement gaps**: Highlight areas that may be under-policed
- **Trend analysis**: Show how violation patterns change over time
- **Comparative analysis**: Compare different intersections and time periods

## Development

- **Hot-reloading**: Changes to HTML, CSS, or JS files automatically refresh the browser
- **Modern setup**: No more global dependencies or manual server management
- **Simple commands**: Just `npm install` and `npm run dev`

See `dev-setup.md` for detailed setup instructions.

