# 2048 Cupcakes Game 🧁

A delightful twist on the classic 2048 puzzle game featuring beautiful cupcake themes! Built with React and enhanced with smooth animations, this game replaces traditional numbers with delicious cupcake varieties that players can collect and combine.

## 🎮 Live Demo

[Play the Game Here](https://mdamir159.github.io/2048-React)

## ✨ Features

- **Cupcake Theme**: Instead of numbers, collect and combine different cupcake varieties
- **Calorie Tracking**: Track calories as you progress through different cupcake levels
- **Smooth Animations**: Fluid tile movements and merge animations
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Keyboard Controls**: Arrow key navigation for seamless gameplay
- **Score System**: Track your current and maximum cupcake achievements
- **Legend System**: Visual guide showing all available cupcake types
- **Game Over Detection**: Smart win/lose condition handling

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Styling**: SASS/SCSS
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages
- **Package Manager**: npm

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 14.0 or higher)
- **npm** (version 6.0 or higher)

You can check your versions by running:
```bash
node --version
npm --version
```

## 🚀 Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/MDAmir159/2048-React.git
cd 2048-React
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`. The page will automatically reload when you make changes to the code.

### 4. Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run build` | Builds the app for production to the `build` folder |
| `npm run eject` | **Note: this is irreversible!** Removes Create React App abstraction |
| `npm run deploy` | Deploys the built app to GitHub Pages |

## 🏗️ Project Structure

```
2048-React/
├── public/
│   ├── index.html          # Main HTML template
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt         # SEO robots file
│   └── images/            # Static images
├── src/
│   ├── components/        # React components
│   │   ├── Board.jsx      # Main game board component
│   │   ├── Tile.jsx       # Individual tile component
│   │   ├── Cell.jsx       # Grid cell component
│   │   ├── GameOverlay.jsx # Game over/win overlay
│   │   ├── CakeList.jsx   # Cupcake legend component
│   │   └── ScoreDetails.js # Score tracking component
│   ├── helper/
│   │   └── index.js       # Game logic and board management
│   ├── hooks/
│   │   └── useEvent.js    # Custom hook for event handling
│   ├── assets/
│   │   ├── dummyData.js   # Cupcake data and images
│   │   ├── images/        # Cupcake images
│   │   └── img/          # Additional assets
│   ├── index.js          # Application entry point
│   ├── main.scss         # Main stylesheet
│   └── styles.scss       # Additional styles
├── package.json          # Dependencies and scripts
└── README.md            # Project documentation
```

## 🎯 Game Rules & How to Play

1. **Objective**: Combine cupcakes to reach the ultimate "Rainbow" cupcake (8192 points)

2. **Controls**: 
   - Use **Arrow Keys** (↑ ↓ ← →) to move tiles
   - **New Game** button to restart

3. **Gameplay**:
   - When two tiles with the same cupcake touch, they merge into the next level cupcake
   - Each merge increases your calorie count
   - The game ends when no more moves are possible
   - Win by reaching the Rainbow cupcake!

4. **Cupcake Progression**:
   - Vanilla Birthday (200 cal) → Bubblegum Pink (250 cal) → ... → Rainbow (5000 cal)

## 🚀 Production Deployment

### GitHub Pages Deployment

This project is configured for easy deployment to GitHub Pages:

1. **Build the project**:
```bash
npm run build
```

2. **Deploy to GitHub Pages**:
```bash
npm run deploy
```

### Manual Deployment to Other Platforms

1. **Build the project**:
```bash
npm run build
```

2. **Deploy the `build` folder** to your hosting platform:
   - **Netlify**: Drag and drop the `build` folder
   - **Vercel**: Connect your GitHub repository
   - **AWS S3**: Upload the `build` folder contents
   - **Firebase Hosting**: Use Firebase CLI

### Environment Variables

For production deployment, you may need to set:

```bash
GENERATE_SOURCEMAP=false  # Reduces build size
PUBLIC_URL=/your-subdirectory  # If deploying to a subdirectory
```

## � Configuration

### Homepage Configuration

The `package.json` includes:
```json
{
  "homepage": "."
}
```

This ensures proper asset loading for GitHub Pages deployment.

### Build Optimization

The project uses Create React App's built-in optimizations:
- **Code Splitting**: Automatic bundle splitting
- **Tree Shaking**: Removes unused code
- **Minification**: Compresses CSS and JavaScript
- **Asset Optimization**: Optimizes images and fonts

## 🧪 Testing

Run the test suite:
```bash
npm test
```

For coverage reports:
```bash
npm test -- --coverage
```

## 📱 Browser Support

This project supports:
- **Chrome** (last 2 versions)
- **Firefox** (last 2 versions)
- **Safari** (last 2 versions)
- **Edge** (last 2 versions)

## 🎨 Customization

### Adding New Cupcakes

1. Add new images to `src/assets/images/`
2. Update `src/assets/dummyData.js` with new cupcake data:

```javascript
{
    cakeImg: newCakeImage,
    cakeName: 'New Cupcake Name',
    cakeCallories: 1000
}
```

### Styling Modifications

- Edit `src/main.scss` for global styles
- Component-specific styles are in their respective files
- SASS variables can be modified for theme changes

## � Troubleshooting

### Common Issues

1. **Game not responding to arrow keys**:
   - Ensure the game area has focus
   - Check browser console for JavaScript errors

2. **Images not loading**:
   - Verify image paths in `dummyData.js`
   - Ensure images exist in `src/assets/images/`

3. **Build failures**:
   - Clear npm cache: `npm cache clean --force`
   - Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Performance Issues

- Use React Developer Tools to identify rendering bottlenecks
- Consider implementing `React.memo()` for frequently updating components
- Optimize images using tools like `imagemin`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

### Development Guidelines

- Follow React best practices
- Use functional components with hooks
- Maintain consistent code formatting
- Add comments for complex logic
- Test changes thoroughly

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**MD Amirul Islam** - [MDAmir159](https://github.com/MDAmir159)

## 🙏 Acknowledgments

- Original 2048 game concept by Gabriele Cirulli
- Cupcake images and theme inspiration
- React community for excellent documentation and tools
- Create React App team for the build tooling

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/MDAmir159/2048-React/issues) page
2. Create a new issue with detailed description
3. Include browser version, OS, and steps to reproduce

---

**Happy Gaming! 🎮🧁**

