import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Trash2, Upload } from "lucide-react";

export default function MediaLibraryPage() {
  const mediaItems = [
    { id: 1, name: "product1.png", size: "350 KB" },
    { id: 2, name: "product2.jpg", size: "190 KB" },
    { id: 3, name: "banner.png", size: "420 KB" },
    { id: 4, name: "mockup.webp", size: "600 KB" },
    { id: 5, name: "thumbnail.png", size: "280 KB" },
    { id: 6, name: "hero-image.jpg", size: "510 KB" },
  ];

  return (
    <div className="flex-1 overflow-auto container mx-auto">
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Media Library
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Manage your images and media files
            </p>
          </div>
          <Button className="gap-2">
            <Upload className="w-4 h-4" />
            Upload Media
          </Button>
        </div>

        {mediaItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mediaItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                  <div className="text-slate-400">
                    <svg
                      className="w-12 h-12 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="font-medium text-sm text-foreground truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.size}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full mt-3 text-destructive hover:bg-destructive/10 hover:text-destructive gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="flex flex-col items-center justify-center py-12 text-center border-dashed">
            <CardContent className="flex flex-col items-center">
              <Upload className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-4">
                No media files yet. Upload your first media.
              </p>
              <Button className="gap-2">
                <Upload className="w-4 h-4" />
                Upload Media
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
