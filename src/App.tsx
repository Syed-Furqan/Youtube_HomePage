import './App.css';
import Categories from './components/Categories';
import PageHeader from './components/PageHeader';
import Sidebar from './components/Sidebar';
import VideoGridItem from './components/VideoGridItem';
import { categories, videos } from './data/homeData';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <Sidebar />
        <div className='overflow-x-hidden px-8 pb-4'>
          <div className='sticky top-0 z-50 bg-white pb-4'>
            <Categories categories={categories} />
          </div>
          <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
            {videos.map(video => (
              <VideoGridItem key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;