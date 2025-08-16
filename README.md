# Harmandeep Singh UI Garden

A comprehensive UI component library built with React and documented with Storybook, containerized with Docker for easy deployment and sharing.

### prerequisite

- Node.js 20 or higher, since storybook has issues with node version less than 20.
- Docker Desktop
- npm

**Clone the repository**
git clone - https://github.com/harman-maan-error/webcomp
cd singh_harmandeep_ui_garden

```bash
npm install --legacy-peer-deps
```

3. **Start**
```bash
npm start
```
react app will be available at `http://localhost:6006`


## docker deployment

```bash
docker build -t ui-garden .
docker run -it --rm -p 5575:5575 ui-garden
```

Portfolio site will be avaialble at `http://localhost:5575`
