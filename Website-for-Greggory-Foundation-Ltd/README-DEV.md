# 🚀 Greggory Foundation Development Environment

## 📋 Quick Start

### Windows Users (Recommended)
1. **Double-click** `start-dev.bat` file
2. **Wait** for both servers to start
3. **Access** your application:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:8080

### All Platforms
```bash
npm run dev
```

## 🎯 What Happens Automatically

When you run `npm run dev`:

✅ **Backend Auto-Start**: Backend server starts on port 8080
✅ **Frontend Auto-Start**: Vite dev server starts on port 5173  
✅ **Database Connection**: MySQL connection established
✅ **Multi-Client Support**: Multiple frontend instances can connect
✅ **Auto-Restart**: Backend restarts if it crashes

## 🌐 Multiple Frontend Access

**All these work simultaneously:**
- `http://localhost:5173` (main development)
- `http://localhost:5174` (if port 5173 is busy)
- `http://localhost:5175` (if ports 5173-5174 are busy)
- **Any number of browser tabs** can access the same backend

## 🔧 Available Scripts

| Command | What It Does |
|---------|--------------|
| `npm run dev` | **Recommended** - Starts both backend and frontend |
| `npm run dev:frontend` | Starts only frontend (Vite) |
| `npm run start:backend` | Starts only backend (smart startup) |
| `npm run server` | Starts backend with nodemon (auto-restart on changes) |
| `npm run dev:all` | Legacy script - starts both servers |

## 🛠️ How It Works

### Smart Backend Startup (`start-backend.js`)
- **Checks if backend is already running** on port 8080
- **Avoids duplicate processes** - won't start if already running
- **Auto-restart on crash** - restarts backend if it fails
- **Port conflict detection** - ensures port 8080 is available
- **Database verification** - confirms MySQL connection

### Multi-Client Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Browser Tab 1 │    │   Browser Tab 2 │    │   Browser Tab 3 │
│  localhost:5173  │    │  localhost:5173  │    │  localhost:5173  │
└─────────┬─────────┘    └─────────┬─────────┘    └─────────┬─────────┘
          │                      │                      │
          └──────────────────────┼──────────────────────┘
                                 │
                    ┌─────────────┴─────────────┐
                    │   Backend Server (8080)   │
                    │  + MySQL Database          │
                    │  + API Endpoints           │
                    │  + Authentication          │
                    └─────────────────────────────┘
```

## 🔍 Troubleshooting

### Backend Not Starting
```bash
# Check if port 8080 is in use
netstat -ano | findstr :8080

# Manually start backend
npm run start:backend
```

### Frontend Not Starting
```bash
# Check available ports
netstat -ano | findstr :5173

# Manually start frontend
npm run dev:frontend
```

### Database Connection Issues
1. **Check MySQL is running**
2. **Verify database credentials** in `.env` file
3. **Check database name**: `greggory_auth_platform`

## 🎯 Development Features

### What You Get:
- ✅ **Hot reload** - Frontend updates automatically
- ✅ **API proxy** - Frontend talks to backend seamlessly  
- ✅ **CORS enabled** - Cross-origin requests work
- ✅ **Error handling** - Graceful error messages
- ✅ **Logging** - Console output for debugging

### Admin Panel Access:
1. **Visit website** → http://localhost:5173
2. **Find admin link** → Glass rectangle below "Rafiki Kabarak" in footer
3. **Login credentials**:
   - Email: `mwanzabrian958@gmail.com`
   - Password: `Admin123`

## 📱 Testing Multiple Devices

**Same Network Access:**
1. **Find your IP**: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. **Share with others**: `http://YOUR_IP:5173`
3. **Backend access**: `http://YOUR_IP:8080`

**All devices share the same backend and database!**

## 🔄 Auto-Restart Behavior

- **Backend crashes** → Auto-restarts in 2 seconds
- **Frontend changes** → Hot reload (no restart needed)
- **Backend code changes** → Nodemon restarts (if using `npm run server`)

---

**🎉 Your development environment is now set up for multi-client access!**

**Run `npm run dev` once, and open as many browser tabs as you need - they all share the same backend!**
