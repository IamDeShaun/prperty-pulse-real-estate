import connectDB from '@/config/database';
import Property from '@/models/Property';


const PropertyPage = async ({ params }) => {
  const resolvedParams = await Promise.resolve(params); // makes sure it's awaited

  await connectDB();

  const property = await Property.findById(resolvedParams.id).lean();

  return <section>{property.name}</section>;
};

export default PropertyPage;