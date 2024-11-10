import { ErrorBoundary } from "../error-boundary/error-catch"
import Hero from "../hero/hero"

const HomePage = () => {
  return (
    <div>
      <ErrorBoundary>
        <Hero/>
      </ErrorBoundary>
    </div>
  )
}

export default HomePage