import React, { useState } from 'react';
import { Star, CheckCircle, XCircle, ArrowRight, Smartphone, Monitor, Camera, Battery, Cpu, HardDrive } from 'lucide-react';

const sampleProducts = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    price: 999,
    originalPrice: 1099,
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviewCount: 2847,
    qualityScore: 92,
    pros: [
      'Premium build quality',
      'Excellent camera system',
      'Long software support',
      'Fast performance'
    ],
    cons: [
      'Expensive price point',
      'Limited customization',
      'No USB-C accessories included'
    ],
    specifications: {
      'Screen Size': '6.1 inches',
      'Storage': '128GB',
      'RAM': '8GB',
      'Battery': '3274 mAh',
      'OS': 'iOS 17'
    },
    features: [
      { name: 'Display', score: 95, icon: <Monitor className="w-4 h-4" /> },
      { name: 'Camera', score: 98, icon: <Camera className="w-4 h-4" /> },
      { name: 'Performance', score: 96, icon: <Cpu className="w-4 h-4" /> },
      { name: 'Battery', score: 85, icon: <Battery className="w-4 h-4" /> }
    ]
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24',
    brand: 'Samsung',
    price: 849,
    originalPrice: 899,
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    reviewCount: 1923,
    qualityScore: 88,
    pros: [
      'Great value for money',
      'Versatile camera system',
      'Fast charging',
      'Expandable storage'
    ],
    cons: [
      'Shorter software support',
      'Occasional lag in UI',
      'Bloatware pre-installed'
    ],
    specifications: {
      'Screen Size': '6.2 inches',
      'Storage': '256GB',
      'RAM': '8GB',
      'Battery': '4000 mAh',
      'OS': 'Android 14'
    },
    features: [
      { name: 'Display', score: 92, icon: <Monitor className="w-4 h-4" /> },
      { name: 'Camera', score: 90, icon: <Camera className="w-4 h-4" /> },
      { name: 'Performance', score: 89, icon: <Cpu className="w-4 h-4" /> },
      { name: 'Battery', score: 93, icon: <Battery className="w-4 h-4" /> }
    ]
  },
  {
    id: '3',
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    price: 899,
    image: 'https://images.pexels.com/photos/1682699/pexels-photo-1682699.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviewCount: 1456,
    qualityScore: 90,
    pros: [
      'Best-in-class AI features',
      'Pure Android experience',
      'Excellent computational photography',
      'Regular security updates'
    ],
    cons: [
      'Average battery life',
      'Limited availability',
      'No expandable storage'
    ],
    specifications: {
      'Screen Size': '6.7 inches',
      'Storage': '128GB',
      'RAM': '12GB',
      'Battery': '5050 mAh',
      'OS': 'Android 14'
    },
    features: [
      { name: 'Display', score: 94, icon: <Monitor className="w-4 h-4" /> },
      { name: 'Camera', score: 97, icon: <Camera className="w-4 h-4" /> },
      { name: 'Performance', score: 91, icon: <Cpu className="w-4 h-4" /> },
      { name: 'Battery', score: 87, icon: <Battery className="w-4 h-4" /> }
    ]
  }
];

function App() {
  const [product1, setProduct1] = useState(sampleProducts[0]);
  const [product2, setProduct2] = useState(sampleProducts[1]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const getComparisonColor = (score1, score2, isFirst) => {
    if (score1 === score2) return 'text-gray-600';
    return (isFirst ? score1 > score2 : score2 > score1) 
      ? 'text-green-600' 
      : 'text-red-500';
  };

  const ProductCard = ({ product, isFirst }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="relative mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        {product.originalPrice && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
            Sale
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="mb-6">
        <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviewCount.toLocaleString()} reviews)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>

      {/* Quality Score */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Quality</span>
          <span className={`text-sm font-bold ${getComparisonColor(
            product1.qualityScore, 
            product2.qualityScore, 
            isFirst
          )}`}>
            {product.qualityScore}/100
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              product.qualityScore >= 90 ? 'bg-green-500' :
              product.qualityScore >= 75 ? 'bg-yellow-400' : 'bg-red-500'
            }`}
            style={{ width: `${product.qualityScore}%` }}
          />
        </div>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
        <div className="space-y-3">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {feature.icon}
                <span className="text-sm font-medium text-gray-700">{feature.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-bold ${getComparisonColor(
                  isFirst ? feature.score : product2.features[index]?.score || 0,
                  isFirst ? product2.features[index]?.score || 0 : feature.score,
                  isFirst
                )}`}>
                  {feature.score}/100
                </span>
                <div className="w-16 bg-gray-200 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full ${
                      feature.score >= 90 ? 'bg-green-500' :
                      feature.score >= 75 ? 'bg-yellow-400' : 'bg-red-500'
                    }`}
                    style={{ width: `${feature.score}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pros & Cons */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        <div>
          <h4 className="text-sm font-semibold text-green-700 mb-2 flex items-center gap-1">
            <CheckCircle className="w-4 h-4" />
            Pros
          </h4>
          <ul className="space-y-1">
            {product.pros.map((pro, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start gap-1">
                <span className="text-green-500 mt-0.5">•</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-red-700 mb-2 flex items-center gap-1">
            <XCircle className="w-4 h-4" />
            Cons
          </h4>
          <ul className="space-y-1">
            {product.cons.map((con, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start gap-1">
                <span className="text-red-500 mt-0.5">•</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Specifications */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h4>
        <div className="space-y-2">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} className="flex justify-between py-1 border-b border-gray-100 last:border-b-0">
              <span className="text-sm text-gray-600">{key}</span>
              <span className="text-sm font-medium text-gray-900">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Product Comparison</h1>
              <p className="text-gray-600 mt-1">Compare products side by side to make informed decisions</p>
            </div>
            <Smartphone className="w-12 h-12 text-blue-600" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Selectors */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select First Product
              </label>
              <select
                value={product1.id}
                onChange={(e) => setProduct1(sampleProducts.find(p => p.id === e.target.value) || sampleProducts[0])}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                {sampleProducts.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.brand} {product.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Second Product
              </label>
              <select
                value={product2.id}
                onChange={(e) => setProduct2(sampleProducts.find(p => p.id === e.target.value) || sampleProducts[1])}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                {sampleProducts.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.brand} {product.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          {/* VS Indicator */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-white rounded-full p-4 shadow-lg border-4 border-blue-200">
              <span className="text-2xl font-bold text-blue-600">VS</span>
            </div>
          </div>

          <ProductCard product={product1} isFirst={true} />
          <ProductCard product={product2} isFirst={false} />
        </div>

        {/* Summary */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Comparison Summary</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                ${Math.abs(product1.price - product2.price)}
              </div>
              <div className="text-sm text-gray-600">Price Difference</div>
              {product1.price !== product2.price && (
                <div className="text-xs text-gray-500 mt-1">
                  {product1.price < product2.price ? product1.name : product2.name} is cheaper
                </div>
              )}
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {Math.abs(product1.qualityScore - product2.qualityScore)}pts
              </div>
              <div className="text-sm text-gray-600">Quality Difference</div>
              {product1.qualityScore !== product2.qualityScore && (
                <div className="text-xs text-gray-500 mt-1">
                  {product1.qualityScore > product2.qualityScore ? product1.name : product2.name} leads
                </div>
              )}
            </div>
            
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600 mb-1">
                {(Math.abs(product1.rating - product2.rating)).toFixed(1)}
              </div>
              <div className="text-sm text-gray-600">Rating Difference</div>
              {product1.rating !== product2.rating && (
                <div className="text-xs text-gray-500 mt-1">
                  {product1.rating > product2.rating ? product1.name : product2.name} is higher rated
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;