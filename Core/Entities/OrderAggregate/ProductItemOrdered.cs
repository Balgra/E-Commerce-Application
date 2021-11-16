namespace Core.Entities.OrderAggregate
{
    public class ProductItemOrdered
    {

        public ProductItemOrdered()
        {
            
        }
        
        public ProductItemOrdered(int productItemId, string productName, string pictureUrl)
        {
            ProductName = productName;
            ProductItemId = productItemId;
            PictureUrl = pictureUrl;
        }
        
        public int ProductItemId { get; set; }

        public string ProductName { get; set; }

        public string PictureUrl { get; set; }
    }
}