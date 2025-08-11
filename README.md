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
npm install
```

3. **Start Storybook**
```bash
npm run storybook
```
Storybook will be available at `http://localhost:6006`

4. **Building Storybook**
```bash
npm run build-storybook
```

## docker deployment

```bash
docker build -t singh_harmandeep_ui_garden .
docker run -p 8083:8083 singh_harmandeep_ui_garden
```

storybook will be avaialble at `http://localhost:8083`
