using System;
using System.Windows;
using System.Windows.Controls;
using Microsoft.Win32;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;

namespace ImageDragDrop
{
    public partial class MainWindow : Window
    {
        private bool isDragging = false;
        private Point startMousePosition;
        private Point startTransformPosition;

        public MainWindow()
        {
            InitializeComponent();
        }

        private void OpenImage_Click( object sender, RoutedEventArgs e )
        {
            OpenFileDialog openFileDialog = new OpenFileDialog();
            openFileDialog.Filter = "Image files (*.png;*.jpeg;*.jpg)|*.png;*.jpeg;*.jpg|All files (*.*)|*.*";

            if (openFileDialog.ShowDialog() == true)
            {
                BitmapImage bitmap = new BitmapImage(new Uri(openFileDialog.FileName));
                DisplayedImage.Source = bitmap;
            }
        }

        private void ImageContainer_MouseLeftButtonDown( object sender, MouseButtonEventArgs e )
        {
            if (DisplayedImage.Source != null && e.OriginalSource == DisplayedImage)
            {
                isDragging = true;

                // Запоминаем начальную позицию мыши и изображения
                startMousePosition = e.GetPosition(this);
                startTransformPosition = new Point(ImageTransform.X, ImageTransform.Y);

                Mouse.Capture(DisplayedImage);
            }
        }

        private void ImageContainer_MouseMove( object sender, MouseEventArgs e )
        {
            if (isDragging && DisplayedImage.Source != null)
            {
                Point currentMousePosition = e.GetPosition(this);

                // Вычисляем новое положение изображения
                double offsetX = currentMousePosition.X - startMousePosition.X;
                double offsetY = currentMousePosition.Y - startMousePosition.Y;

                ImageTransform.X = startTransformPosition.X + offsetX;
                ImageTransform.Y = startTransformPosition.Y + offsetY;
            }
        }

        private void ImageContainer_MouseLeftButtonUp( object sender, MouseButtonEventArgs e )
        {
            if (isDragging)
            {
                isDragging = false;
                Mouse.Capture(null);
            }
        }
    }
}
